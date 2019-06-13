var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        require: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        require: [true, 'La contrasenha es necesaria']
    },
    img: {
        type: String,
        require: false
    },  
    role: {
        type: String,
        require: true,
        default: 'USER_ROLE'
    }
});

module.exports = mongoose.model( 'Usuario', usuarioSchema );