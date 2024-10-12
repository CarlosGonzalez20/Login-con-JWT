const express = require('express');
const { getAllUsuarios, addUsuario, getUsuarioID, updateUsuario, deleteUsuario, autenticarUsuario, cambiarRolUsuario } = require('../controller/usuario.controller');
const router = express.Router();
const { checkRole } = require('../middleware/auth');

// mostrar todos los usuarios en MongoDB
router.get('/usuarios', checkRole('usuario', 'admin'), getAllUsuarios);
// creación de un nuevo usuario
router.post('/nuevoUsuario', addUsuario);
// buscar un usuario
router.get('/usuario/:id', checkRole('usuario', 'admin'), getUsuarioID);
// actualizar un usuario
router.put('/actualizarUsuario/:id', checkRole('admin'), updateUsuario);
// borrar un usuario
router.delete('/borrarUsuario/:id', checkRole('admin'), deleteUsuario);
// autenticar usuario
router.post('/autenticar', autenticarUsuario);
// cambiar rol de usuario
router.put('/cambiarRolUsuario/:id', cambiarRolUsuario);

module.exports = router;