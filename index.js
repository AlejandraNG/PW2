//Todos deben tener la misma version de NODE
//Definicion de API, estan en standby mientras se hace una solicitud
//Express permite crear apis con NODE.js
//Node.js es un motor que permite crear un servidor local con un ambiente adecuado
//para que llavascript pueda correr en la computadora sin un navegador

//comandos consola
//npm init ->crear el package
//npm install express --save ->intalaar express
//node index.js
//nodemon index.js
//npm start


//Object Relation model ORM es una libreria que se instala en las aplicaciones que hace que tengamos
//modelos con las propiadedes de las bases de datos mapeadas, vamos a usar MONGOOSE
// npm i mongoose --save

//Se importan las librerias de express
const express = require('express');
const bodyParser = require("body-parser");
require('./src/models/connection');

/** requires de rutas */
const school_router = require('./src/routes/schoolRouter');

const app = express();
const port = 3000; // 5000 // 5001 //usara puertos definidos

app.use(bodyParser.json());
app.use('/api', school_router);


// app.use(express.bodyParser());

//instalar bodyParser npm install body-parser --save

//en el package si quieres correr algo puedes poner npm start
//por ejemplo y te corre el contenido de la cosa

//GET
//HEAD
//POST
//PUT
//DELETE
//OPTIONS

//se hace solicitud de api
   
//que va a hacer la api, que puerto y la funcion que sse va a ejecutar
//cuando e inicialize
app.listen(port, () => {
    console.log("La aplicación está escuchando al puerto http://localhost:" + port
    );
});