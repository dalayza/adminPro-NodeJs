// Requires
var express = require('express');

// Inicializar variables
var app = express();

const path = require('path');
const fs = require('fs');

// Rutas
app.get('/:tipo/:img', (req, res, next) => {
    var tipo =req.params.tipo;
    var img = req.params.img;

    // direccion para envontrar la imagen
    var pathImagen = path.resolve( __dirname, `../uploads/${ tipo }/${ img }` );

    // verificar si el path es valido
    if ( fs.existsSync( pathImagen ) ) {
        res.sendFile( pathImagen );
    } else {
        var pathNoImagen = path.resolve(__dirname, '../assets/no-img.jpg');
        res.sendFile( pathNoImagen );
    }
});

module.exports = app;