const mongoose = require('mongoose');
const Usuario = require('./model/usuario.model');

mongoose.connect('mongodb://127.0.0.1:27017/prueba1').then(() => {
    console.log('Conectado a la base de datos');
}).catch((error) => {
    console.log('Error al conectarse a la base de datos');
    console.log(error);
});

// CREAR UN REGISTRO EN MONGODB

// const nuevoUsuario = new Usuario({
//     nombre: 'Pedro',
//     edad: 35,
//     email: 'pedro@gmail.com'
// });
// nuevoUsuario.save();

// BUSCAR UN REGISTRO EN MONGODB

// Usuario.findOne({nombre: 'Pedro'}).then((usuario) => {
//     console.log('Usuario encontrado');
//     console.log(usuario);
// }).catch((error) => {
//     console.log('Error al buscar el usuario');
//     console.log(error);
// });

// ACTUALIZAR UN REGISTRO EN MONGODB

// Usuario.updateOne({nombre: 'Luis'}, {edad: 36}).then((usuario) => {
//     console.log('Usuario actualizado');
//     console.log(usuario);
// }).catch((error) => {
//     console.log('Error al actualizar el usuario');
//     console.log(error);
// });

// ELIMINAR UN REGISTRO EN MONGODB

Usuario.deleteOne({nombre: 'Luis'}).then((usuario) => {
    console.log('Usuario eliminado');
    console.log(usuario);
}).catch((error) => {
    console.log('Error al eliminar el usuario');
    console.log(error);
});