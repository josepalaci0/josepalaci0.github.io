// service-worker.js

const CACHE_VERSION = 'v2'
const CACHE_NAME = `my-app-cache-${CACHE_VERSION}`
const CACHE_FILES = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/icon.png',
    '/assets/',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CACHE_FILES)
        })
    )
})

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((name) => {
                    if (name !== CACHE_NAME) {
                        return caches.delete(name)
                    }
                })
            )
        })
    )
})

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response
            }
            return fetch(event.request)
                .then((networkResponse) => {
                    // Cache the network response for future use
                    return caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, networkResponse.clone())
                        return networkResponse
                    })
                })
                .catch(() => {
                    // Handle network errors, e.g., show a custom error page
                    // or return an offline fallback
                })
        })
    )
})

self.addEventListener('message', (event) => {
    if (event.data === 'skipWaiting') {
        self.skipWaiting()
    }
})
