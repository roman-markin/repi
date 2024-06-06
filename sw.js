self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open('store')
      .then((cache) =>
        cache.addAll([
          '/repi/',
          '/repi/index.html',
          '/repi/index.js',
          '/repi/style.css',
        ])
      )
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
