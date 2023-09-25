// service-worker.js

const CACHE_NAME = 'v1'
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/script.js',
    '/icon.png',
    '/assets/',
]

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    )
})

self.addEventListener('fetch', (event) => {
    if (event.request.url.startsWith(self.location.origin)) {
        // Esto asegura que el Service Worker solo maneje solicitudes relacionadas con tu dominio.
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request)
            })
        )
    }
})

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then(function (registration) {
                console.log(
                    'Service Worker registrado con éxito:',
                    registration
                )
            })
            .catch(function (error) {
                console.log('Error al registrar el Service Worker:', error)
            })
    })
}
