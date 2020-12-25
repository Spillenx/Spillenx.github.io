const cacheName = 'pwa-assignment-v6'
const VERSION = '6'
const filesToCache = [
  '/index.html',
  '/manifest.json',
  '/icons/favicon.png',
  '/js/helper.js',
  '/js/main.js',
  '/controller/mainController.js',
  '/view/mainView.js',
  '/css/styles.css',
  '/images/beach.jpg',
  '/images/shenzhen.jpg'
]

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(cacheName)
    .then((cache) => {
      return cache.addAll(filesToCache)
    })
    .then(() => {
      self.skipWaiting()
    })
  )
})

self.addEventListener('activate', (e) => {
  e.waitUntil(
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

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
    .then((response) => {
      if(response) {
        return response
      }
      return fetch(e.request)
    })
  )
})

self.addEventListener('activate', (e) => { 
  e.waitUntil( 
    caches.keys()
        .then((cacheName) => { 
              cacheName.forEach((value) => { 
                console.log(value)
              if (value.indexOf(VERSION) < 0) { 
                  caches.delete(value)
              } 
          })
          return
      }) 
  ) 
})

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(e.request)
      }
    )
  )
})