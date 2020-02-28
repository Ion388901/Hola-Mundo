// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../Controller/PagesController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

router.get('/product/*', PagesController.product);
router.get('/del/*',PagesController.supr);
router.get('/update/*',PagesController.update);
router.get('/add', PagesController.add);
router.post('/insert', PagesController.insert);
router.post('/toUpdate', PagesController.whatUpdate);

// Exporta las configuraciones
module.exports = router;

/*
//route for homepage
app.get('/',(req, res) => {
  let sql = "SELECT * FROM product";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.render('product_view',{
      results: results
    });
  });
});

//route for insert data
app.post('/save',(req, res) => {
  let data = {product_name: req.body.product_name, product_price: req.body.product_price};
  let sql = "INSERT INTO product SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for update data
app.post('/update',(req, res) => {
  let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.body.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.redirect('/');
  });
});

//route for delete data
app.post('/delete',(req, res) => {
  let sql = "DELETE FROM product WHERE product_id="+req.body.product_id+"";
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
      res.redirect('/');
  });
});

//server listening
app.listen(8000, () => {
  console.log('Server is running at port 8000');
});
*/

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