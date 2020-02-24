//let name = "Aldo";
/*
function sum(a, b){
    return a + b
}

let sum = (a, b) => {
    return a + b;
}

console.log(sum(3, 5));

console.log(() => 5 + 3);

console.log("Aldo");
*/

let express = require('express');

let app = express();

let appRoutes = require('./routes/app');

let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';

let hbs = exphbs.create({extname: extNameHbs});

// Importa la configuración de la app
let appConfig = require('./configs/app');

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port,() => {
  let show = 'App listening on port ' + appConfig.express_port + '! (http://localhost:' + appConfig.express_port +')';
  console.log(show);
});

app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

app.use('/', appRoutes);

app.get('/', (req, res) => {
    res.send('Aldo');
});

app.listen(3000, () => {
    console.log('It\'s Alive!');
});

/*
/index.js
Importa el paquete de express
let express = require('express');
Obtiene una instancia de express
let app = express();

Importa las configuraciones
let appRoutes = require('./routes/app');
Define que configuraciones de rutas se van a utilizar para la ruta
app.use('/', appRoutes);

Establece que al hacer una petición GET a la ruta / se conteste
con las palabras "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});
Comienza el servidor en el puerto 3000 de localhost
para ver el sistema 
app.listen(3000,() => {
  console.log('App listening on port 3000! (http://localhost:3000)');
});
*/