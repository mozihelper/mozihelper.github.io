/* MoziHelper — офлайн-режим и быстрые переходы.
   Страницы (HTML): отдаём СРАЗУ ИЗ КЭША и параллельно тянем свежую версию в фоне
   (stale-while-revalidate). Переход между страницами становится мгновенным —
   без ожидания сети, — а обновление сайта доезжает со следующего открытия.
   Всё остальное (шрифты, PDF, MathJax, иконки) — из кэша, это неизменяемые файлы. */
const CACHE = 'mozi-v19';
const SHELL = [
  './',
  './index.html',
  './algebra-sem1.html',
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
      caches.open(CACHE).then(function(c){
        return c.match(req).then(function(hit){
          /* Фоновое обновление: страница в кэше заменяется свежей к следующему заходу. */
          var net = fetch(req).then(function(res){
            if (res && res.ok) c.put(req, res.clone()).catch(function(){});
            return res;
          }).catch(function(){ return null; });
          /* Есть в кэше — отдаём немедленно, сеть не ждём. */
          if (hit) { e.waitUntil(net); return hit; }
          return net.then(function(res){
            return res || caches.match('./index.html');
          });
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
