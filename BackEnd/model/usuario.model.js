const mongoose = require('mongoose');
const esquemaUsuario = new mongoose.Schema({
    nombre: String,
    password: String,
    edad: Number,
    email: String,
    rol: {
        type: String,
        enum: ['admin', 'usuario'],
        default: 'usuario'
    }
});
module.exports = mongoose.model('Usuario', esquemaUsuario);