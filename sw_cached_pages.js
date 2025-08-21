/** below are sw lifecycle events - refer service-wkr-lifecycle.jpg
 * a] register [performed in index.html]
 * b] install sw
 * c] activate sw
 */

/*
Caching Strategy:
Cache all our pages including the assets (js,css)
Two ways to achieve:
a] cache individual pages
b] cache the entire response [website]
*/

// ****** note: here we are implementing cache individual pages

const cacheName = 'v1';
// const cacheName = 'v2';

// 1st caching strategy : individual assets
const cacheAssets = [
    'index.html',
    'about.html',
    'css/style.css',
    'js/main.js'
];

// call install event and cache assets
self.addEventListener('install', (installEvent) => {
    console.log('Service Worker: Installed');
    installEvent.waitUntil(
        caches
            .open(cacheName)
            .then(cache => {
                console.log('Service Worker: Caching Files');
                cache.addAll(cacheAssets);
            })
            .then(() => self.skipWaiting())
    );
});

// activate event; here we clear old caches
self.addEventListener('activate', (activateEvent) => {
    console.log('Service Worker: activated');
    // here we get rid of unwanted caches eg: v2 or v3 etc
    activateEvent.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if(cache != cacheName){
                        console.log(`Clearing old cache ${cache}`);
                        return caches.delete(cache);
                    }
                })
            )
        })
    );
});

// event to show files during offline mode; it is taken care of in fetch event
self.addEventListener('fetch', (fetchEvent) => {
    console.log('Service Worker: fetchEvent');
    fetchEvent.respondWith(
        // intial request holds the entire webpages eg: index.html or about.html, basically on load of website , 
        // that request's response is being used to fetch from browser cache
        // fetch is inbuilt function to call API's just like axios or request
        fetch(fetchEvent.request).catch(() => caches.match(fetchEvent.request))
    );
});