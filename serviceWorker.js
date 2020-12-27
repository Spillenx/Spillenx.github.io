const cacheName = 'pwa-assignment-v1'
const VERSION = '1'
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

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      return cache.addAll(filesToCache)
    })
    // .then(() => {
    //   self.skipWaiting()
    // })
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
    .then((cacheName) => {
      cacheName.forEach((value) => {
        if(value.indexOf(VERSION) < 0) {
          caches.delete(value)
        }
      })
      return
    })
  )
})

self.addEventListener('activate', function (event) { 
  event.waitUntil( 
    caches.keys()
        .then(function (cacheNames) { 
              cacheNames.forEach(function (value) { 
              if (value.indexOf(VERSION) < 0) { 
                  caches.delete(value); 
              } 
          }); 
          return; 
      }) 
  );  
}); 

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch(error => {
        console.log(error)
      })
  )
})