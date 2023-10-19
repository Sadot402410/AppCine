self.addEventListener('install', e => {

    const recursos = caches.open('BovedaRecursos').then(cache => {
        cache.add('/'), //buena practica
            cache.add('index.html'),
            cache.add('app.js'),
            cache.add('styles.css'),
            cache.add('manifest.json')
    })

    const imagenes = caches.open('BovedaImagenes').then(cache => {
        cache.add('/'), //buena practica
            cache.add('images/default.png'),
            cache.add('images/Avengers Endgame.jpg'),
            cache.add('images/Up.jpg'),
            cache.add('images/The Shining.jpg'),
            cache.add('images/Ready Player.jpg'),
            cache.add('images/Quien soy yo.jpg'),
            cache.add('images/Pesadilla en Elm Street 5.jpg'); 

    })
    e.waitUntil(recursos, imagenes);
});

self.addEventListener('fetch', e => {
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

