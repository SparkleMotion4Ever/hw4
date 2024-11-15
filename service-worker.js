const cacheName = 'pwa-demo-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/icons/aha72.jpg',
  '/icons/aha96.jpg',
  '/icons/aha128.jpg',
  '/icons/aha144.jpg',
  '/icons/aha152.jpg',
  '/icons/aha192.jpg',
  '/icons/aha384.jpg',
  '/icons/aha512.jpg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
