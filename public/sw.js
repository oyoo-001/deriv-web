const CACHE_NAME = 'pro-trader-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
]; // Removed external CDNs from mandatory caching

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});