/* Femscape native service worker - no CDN or build-time dependencies. */
const CACHE_NAME = 'femscape-static-v1.0.2';
const PRECACHE = [
  './', './index.html', './dist/bundle.css', './dist/script.js',
  './manifest.json', './imgs/logo.svg', './imgs/logo.png', './imgs/logo-192x192.png',
  './docs/feminism_master_sheet.pdf', './docs/feminism_master_sheet.docx'
];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(names => Promise.all(names.filter(n => n !== CACHE_NAME).map(n => caches.delete(n)))).then(() => self.clients.claim()));
});
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') cache.put(request, response.clone());
      return response;
    } catch (error) {
      const cached = await cache.match(request);
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const appShell = await cache.match('./index.html');
        if (appShell) return appShell;
      }
      return Response.error();
    }
  })());
});
