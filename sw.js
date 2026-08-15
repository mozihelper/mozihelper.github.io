/* MoziHelper — офлайн-режим.
   Страницы (HTML) берём СНАЧАЛА ИЗ СЕТИ и лишь при её отсутствии из кэша:
   при cache-first обновлённый сайт не доезжал до тех, кто уже заходил.
   Всё остальное (шрифты, PDF, MathJax, иконки) — сначала из кэша, это неизменяемые файлы. */
const CACHE = 'mozi-v34';
const SHELL = [
  './',
  './index.html',
  './algebra-sem1.html',
  './quiz-sem1.js',
  './quiz-sem2.js',
  './algebra-sem2.html',
  './literatura.html',
  './links.html',
  './lekcii-sem1.html',
  './lekcii-sem2.html',
  './manifest.webmanifest',
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
      return Promise.all(keys.map(function(k){ return k === CACHE ? null : caches.delete(k); }));
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

  e.respondWith(
    caches.open(CACHE).then(function(c){
      return c.match(req).then(function(hit){
        var net = fetch(req).then(function(res){
          if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()).catch(function(){});
          return res;
        }).catch(function(){ return hit; });
        return hit || net;
      });
    })
  );
});
