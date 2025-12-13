const CACHE_NAME = 'psy-cache-v1';
const STATIC_CACHE = [
  '/psy-consult-demo/',
  'index.html',
  'style.css',
  'app.js',
  'manifest.json',
  'imag213.png?v=2'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
