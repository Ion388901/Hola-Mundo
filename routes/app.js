let router = require('express').Router();
let pagesController = require('../Controller/PagesController');

router.get('/', pagesController.homepage);

router.get('/Acerca', pagesController.about);

router.get('/*', pagesController.extra);

module.exports = router;

/*
routes/app.js
De express obtiene una instancia del componente Router
let router = require('express').Router();

Establece que al hacer una petición GET a la ruta / se conteste
con las palabras "Hello World!"
router.get('/', (req, res) => {
  res.send('Hello World!');
});

Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', (req, res) => {
  res.send('About us');
});

Exporta las configuraciones
module.exports = router;
*/