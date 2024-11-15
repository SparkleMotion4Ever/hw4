const cacheName = 'pwa-demo-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/aha72.jpg',
  '/aha96.jpg',
  '/aha128.jpg',
  '/aha144.jpg',
  '/aha152.jpg',
  '/aha192.jpg',
  '/aha384.jpg',
  '/aha512.jpg',
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
