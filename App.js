const mongoose = require('mongoose');
const Usuario = require('./model/usuario.model');
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());
const usuarioRoutes = require('./routes/usuarios.routes');
app.use('/api', usuarioRoutes);

const homeRoute = require('./homeRoute');
app.get('/', homeRoute);

app.listen(port, () => {
    // Inicia el servidor y escucha en el puerto definido.
    console.log(`Example app listening at http://localhost:${port}`);
});

mongoose.connect('mongodb://localhost:27017/prueba1').then(() => {
    console.log('Database connected');
}).catch((err) => {
    console.log(err); 
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

// Usuario.deleteOne({nombre: 'Luis'}).then((usuario) => {
//     console.log('Usuario eliminado');
//     console.log(usuario);
// }).catch((error) => {
//     console.log('Error al eliminar el usuario');
//     console.log(error);
// });