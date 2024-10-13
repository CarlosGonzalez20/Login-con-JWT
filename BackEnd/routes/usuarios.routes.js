const express = require('express');
const { getAllUsuarios, addUsuario, getUsuarioID, updateUsuario, deleteUsuario, autenticarUsuario, cambiarRolUsuario } = require('../controller/usuario.controller');
const router = express.Router();
const { checkRole } = require('../middleware/auth');

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
// cambiar rol de usuario
router.put('/cambiarRolUsuario/:id', cambiarRolUsuario);

module.exports = router;