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

// ****** note: here we are implementing cache the entire response [website]

const cacheName = 'v2';


// call install event and cache assets
self.addEventListener('install', (installEvent) => {
    console.log('Service Worker: Installed');
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
        fetch(fetchEvent.request)
            .then(res => {
                // make copy/clone of the response
                const resClone = res.clone();
                // open a cache
                caches
                    .open(cacheName)
                    .then(cache => {
                        // Add response to cache
                        console.log('Service Worker: Caching Files');
                        cache.put(fetchEvent.request, resClone);
                    });
                return res;
            })
            .catch(err => caches.match(fetchEvent.request).then(res => res))
    );
});