// Cache name and files to ne cached

const cacheName = 'pwa-assignment-v1'
const filesToCache = [
  '/index.html',
  '/manifest.json',
  '/icons/favicon.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/icon-maskable.png',
  '/js/helper.js',
  '/js/main.js',
  '/controller/mainController.js',
  '/view/mainView.js',
  '/css/styles.css',
  '/images/beach.jpg',
  '/images/shenzhen.jpg'
]

// Install ervice worker
self.addEventListener('install', event => {
  event.waitUntil(caches.open(cacheName)
  .then(cache => {
    return cache.addAll(filesToCache)
  }))
})


// Activate service worker
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  )
 })