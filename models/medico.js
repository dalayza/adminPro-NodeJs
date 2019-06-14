var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var medicoSchema = new Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es necesario']
    },
    img: {
        type: String,
        require: false
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        require: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        require: [true, 'El id hospital es un campo obligatorio']
    },
});

module.exports = mongoose.model( 'Medico', medicoSchema );