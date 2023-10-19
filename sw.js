self.addEventListener('install', e => {

    const recursos = caches.open('BovedaRecursos').then(cache => {
        cache.add('/'), //buena practica
            cache.add('index.html'),
            cache.add('app.js'),
            cache.add('styles.css')
    })

    const imagenes = caches.open('BovedaImagenes').then(cache => {
        cache.add('/'), //buena practica
            cache.add('images/default.png'),
            cache.add('images/peli1.jpg'),
            cache.add('images/peli2.jpg'),
            cache.add('images/peli3.jpg'),
            cache.add('images/peli4.jpg'),
            cache.add('images/peli5.jpg'),
            cache.add('images/peli6.jpg'); 

    })
    e.waitUntil(recursos, imagenes);
});


self.addEventListener('fetch', e => {
// const resp = caches.match(e.request).then(res => {
    //     if (res) return res;
    //     console.log('no existe el recurso en cache ->', e.request.url);

    //     return fetch(e.request).then(newResp => {
        //         caches.open('BovedaRecursos').then(cache => {
    //             cache.put(e.request, newResp)
    //         });
    //         return newResp.clone();
    //     });
    // });

    // const resp2 = caches.match(e.request).then(res2 => {
    //     if (res2) return res2;
    //     console.log('no existe el recurso en cache ->', e.request.url);
    
    //     return fetch(e.request).then(newResp => {
        //         caches.open('BovedaImagenes').then(cache => {
            //             cache.put(e.request, newResp)
            //         });
            //         return newResp.clone();
            //     });
            // });
            
            // e.respondWith(resp, resp2)
    const resp = fetch(e.request).then(newResp => { 
        caches.open('BovedaImagenes').then(cache => {
            cache.put(e.request, newResp)
        });
        return newResp.clone();
    }).catch(err => {
        return caches.match(e.request);
    })
    e.respondWith(resp)
});

