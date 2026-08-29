/* MoziHelper — офлайн-режим.
   Страницы (HTML) берём СНАЧАЛА ИЗ СЕТИ и лишь при её отсутствии из кэша:
   при cache-first обновлённый сайт не доезжал до тех, кто уже заходил.
   Всё остальное (шрифты, PDF, MathJax, иконки) — сначала из кэша, это неизменяемые файлы. */
const CACHE = 'mozi-v117';
const FILES = 'mozi-files';   /* материалы, сохранённые пользователем: не чистится при обновлениях */
const SHELL = [
  './',
  './index.html',
  './algebra-sem1.html',
  './quiz-sem1.js',
  './quiz-sem2.js',
  './tasks-sem2.js',
  './algebra-sem2.html',
  './literatura.html',
  './oboznacheniya.html',
  './links.html',
  './lekcii-sem1.html',
  './lekcii-sem2.html',
  './manifest.webmanifest',

  './splash/splash-1125x2436.png',
  './splash/splash-1170x2532.png',
  './splash/splash-1179x2556.png',
  './splash/splash-1206x2622.png',
  './splash/splash-1242x2208.png',
  './splash/splash-1242x2688.png',
  './splash/splash-1284x2778.png',
  './splash/splash-1290x2796.png',
  './splash/splash-1320x2868.png',
  './splash/splash-750x1334.png',
  './splash/splash-828x1792.png',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png'
];

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE).then(function(c){
      return Promise.all(SHELL.map(function(u){
        return c.add(new Request(u, { cache: 'reload' })).catch(function(){});
      }));
    }).then(function(){ return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ return (k === CACHE || k === FILES) ? null : caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  if (req.method !== 'GET') return;
  var url = new URL(req.url);
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;

  var isPage = req.mode === 'navigate'
            || req.destination === 'document'
            || /\.html$/i.test(url.pathname);

  if (isPage) {
    e.respondWith(
      fetch(req).then(function(res){
        if (res && res.ok) {
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(req, copy).catch(function(){}); });
        }
        return res;
      }).catch(function(){
        return caches.match(req).then(function(hit){
          return hit || caches.match('./index.html');
        });
      })
    );
    return;
  }

  /* Сначала смотрим в хранилище материалов, сохранённых пользователем вручную
     («Читать без интернета»): оно не версионируется и переживает обновления. */
  e.respondWith(
    caches.open(FILES).then(function(fc){
      return fc.match(req).then(function(saved){
        if (saved) return saved;
        return caches.open(CACHE).then(function(c){
          return c.match(req).then(function(hit){
            var net = fetch(req).then(function(res){
              if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()).catch(function(){});
              return res;
            }).catch(function(){ return hit; });
            return hit || net;
          });
        });
      });
    })
  );
});
