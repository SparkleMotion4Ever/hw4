const cacheName = 'pwa-demo-cache-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/styles.css',
  '/manifest.json',
  '/aha72.png',
  '/aha96.png',
  '/aha128.png',
  '/aha144.png',
  '/aha152.png',
  '/aha192.png',
  '/aha384.png',
  '/aha512.png',
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
