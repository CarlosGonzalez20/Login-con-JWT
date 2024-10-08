const Usuario = require('../models/usuario.model');
const secret_key = 'mysecretkey';

//Mostrar todos los Usuarios
exports.getAllUsuarios = async (req, res) => {
    const usuarios = await Usuario.find();
    console.log("getAllUsuarios exitosamente");
    res.status(200).json(usuarios);
};

//Crear un nuevo Usuario
exports.addUsuario = async (req, res) => {
    const nuevoUsuario = await Usuario.create(req.body);
    console.log("addUsuario exitosamente " + req.body);
    res.status(201).json(nuevoUsuario);
};

//Mostrar un usuario mediante su ID
exports.getUsuarioID = async (req, res) => {
    const { id } = req.params;
    const usuarioID = await Usuario.findById(id);
    if (!usuarioID) return res.status(404).send({ message: 'No se encontró el usuario' });
    console.log("getUsuarioID exitosamente " + id);
    res.status(200).json(usuarioID);
}

//Actualizar un usuario por ID
exports.updateUsuario = async (req, res) => {
    const { id } = req.params;
    const usuarioUpdate = await Usuario.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!usuarioUpdate) return res.status(404).send({ message: 'No se encontró el usuario' });
    console.log("updateUsuario exitosamente " + id);
    res.status(200).json(usuarioUpdate);
}

//Borrar un usuario por ID
exports.deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const usuarioDelete = await Usuario.findByIdAndDelete(id);
    if (!usuarioDelete) return res.status(404).send({ message: 'No se encontró el usuario' });
    console.log("deleteUsuario exitosamente " + id);
    res.status(200).json({ message: 'Usuario eliminado' });
}

exports.autenticarUsuario = async (req, res) => {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!email) return res.status(404).send({ message: 'No se encontro el email' });
    if (!usuario) return res.status(404).send({ message: 'No se encontro el usuario' });
    if (usuario.password !== password) return res.status(401).send({ message: 'Contraseña incorrecta' });
    console.log("autenticarUsuario succesfully "+ email);
    const token = jwt.sign({ nombre: usuario.nombre, email: usuario.email, rol: usuario.rol }, secret_key, {expiresIn: '1h'});
    console.log("token creado: " + token);
    res.status(200).json({ token });
}
