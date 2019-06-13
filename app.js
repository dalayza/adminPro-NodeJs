// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Importar rutas
var appRoutes = require('./routes/app');
var loginRoutes = require('./routes/login');
var usuarioRoutes = require('./routes/usuario');

// Conexion DBA
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', {
        useCreateIndex: true,
        useNewUrlParser: true,
    }, (err, res) => {
        if(err) throw err;
        console.log('DBA MongDB: \x1b[32m%s\x1b[0m','online');
    });

// Rutas
app.use('/', appRoutes);
app.use('/login', loginRoutes);
app.use('/usuario', usuarioRoutes);

// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server port 3000: \x1b[32m%s\x1b[0m','online');
});