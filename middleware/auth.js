const jwt = require('jsonwebtoken');
const secret_key = 'mysecretkey';

function checkRole(rol) {
    return (req, res, next) => {
        const token = req.headers['authorization'];
        if (!token) return res.status(401).send({ message: 'No se proporcionó un token, Acceso Denegado' });
        try {
            const decoded = jwt.verify(token, secret_key);
            req.decoded = decoded;
            if (decoded.rol == rol) return res.status(403).send({ message: 'No tienes permisos para acceder a esta ruta' });
            req.user = decoded;
            next();
        } catch (err) {
            console.log(err);
            return res.status(401).send({ message: 'Token inválido' });
        }
    };
}

module.exports = { checkRole };