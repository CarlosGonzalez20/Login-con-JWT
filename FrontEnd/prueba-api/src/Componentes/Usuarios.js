import React, { useState, useEffect } from 'react';
import './usuarios.css';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Obtener usuarios desde la API
  const fetchUsuarios = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/usuarios');
      if (!response.ok) throw new Error('Error al obtener los usuarios');
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Eliminar usuario por ID
  const handleDeleteUsuario = async (id) => {
    if (window.confirm(`¿Estás seguro de que deseas eliminar al usuario con ID: ${id}?`)) {
      try {
        const response = await fetch(`http://localhost:3001/api/borrarUsuario/${id}`, {
          method: 'DELETE',
        });

        if (!response.ok) throw new Error('No se pudo eliminar el usuario');
        alert('Usuario eliminado exitosamente');

        // Actualiza la lista filtrando el usuario eliminado
        setUsuarios(usuarios.filter((usuario) => usuario._id !== id));
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
    }
  };

  // Llamada inicial para obtener usuarios al montar el componente
  useEffect(() => {
    fetchUsuarios();
  }, []);

  return (
    <div>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p>Error: {error}</p>}
      {usuarios.length > 0 ? (
        <div>
          <h2>Lista de Usuarios:</h2>
          <div className="users-list">
            {usuarios.map((usuario) => (
              <div className="user-card" key={usuario._id}>
                <p><strong>Nombre:</strong> {usuario.nombre}</p>
                <p><strong>Email:</strong> {usuario.email}</p>
                <p><strong>Edad:</strong> {usuario.edad}</p>
                <button className="delete-button" onClick={() => handleDeleteUsuario(usuario._id)}>
                  Borrar
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default Usuarios;
