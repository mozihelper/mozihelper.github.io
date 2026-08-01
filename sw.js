/* MoziHelper — офлайн-режим.
   Страницы отдаются из кэша сразу и обновляются в фоне (stale-while-revalidate),
   PDF и шрифты кладём в кэш при первом обращении — чтобы работали без сети. */
const CACHE = 'mozi-v4';
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

  e.respondWith(
    caches.open(CACHE).then(function(c){
      return c.match(req).then(function(hit){
        var net = fetch(req).then(function(res){
          if (res && (res.ok || res.type === 'opaque')) c.put(req, res.clone()).catch(function(){});
          return res;
        }).catch(function(){ return hit; });
        /* шрифты и PDF — сразу из кэша, если есть; страницы — тоже, но обновляем в фоне */
        return hit || net;
      });
    })
  );
});
