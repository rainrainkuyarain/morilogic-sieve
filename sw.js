const CACHE_NAME = 'mori-sieve-v1';
const OFFLINE_URL = './index.html';

// 1. Install - Prepare the local archive
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      // This saves the main page and the basic structure
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './favicon.svg'
      ]);
    })
  );
});

// 2. Fetch - Use the archive if the internet is dead
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return the cached file, or try to get it from the web
      return response || fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match(OFFLINE_URL);
        }
      });
    })
  );
});
