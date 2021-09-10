const mongoose = require ('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/PW2?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false',
 {useNewUrlParser:true})
 .then(() => console.log ("Conectado a la base de datos mongodb"))
 .catch(() => {
    console.log('No se pudo conectar con la base de daatos mongodb. Terminando proceso')
    process.exit();
});