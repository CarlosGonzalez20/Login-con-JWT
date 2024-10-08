const express = require('express');
const { getAllUsuarios, addUsuario, getUsuarioID, updateUsuario, deleteUsuario, autenticarUsuario } = require('../controllers/usuario.controller');
const router = express.Router();

// mostrar todos los usuarios en MongoDB
router.get('/usuarios', getAllUsuarios);
// creación de un nuevo usuario
router.post('/nuevoUsuario', addUsuario);
// buscar un usuario
router.get('/usuario/:id', getUsuarioID);
// actualizar un usuario
router.put('/actualizarUsuario/:id', updateUsuario);
// borrar un usuario
router.delete('/borrarUsuario/:id', deleteUsuario);
// autenticar usuario
router.post('/autenticar', autenticarUsuario);

module.exports = router;