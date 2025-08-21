// Make sure service worker are supported [majority of browsers support them]
if('serviceWorker' in navigator){
    // navigator is like browser object
    // console.log('Service worker supported!!');
    //register sw
    // https://stackoverflow.com/a/68310400 [could not register in main.js, hence moved to index.html; stack overflow suggestion]
    /**window.addEventListener('load', () => {
        // register method will return promise
        navigator.serviceWorker
            .register('../sw_cached_pages.js')
            .then(reg => console.log('Service worker: Registered' + reg))
            .catch(err => console.log(`Registration Error: ${err}`));
    });**/
}