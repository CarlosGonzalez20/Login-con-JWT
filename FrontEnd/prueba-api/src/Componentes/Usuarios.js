// Usuarios.js
import React, { useState, useEffect } from 'react';

const Usuarios = ({ onFetchComplete }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFetchUsuarios = () => {
    setLoading(true);
    setError(null);

    fetch('http://localhost:3001/api/usuarios')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        return response.json();
      })
      .then(data => {
        setUsuarios(data);
        if (onFetchComplete) onFetchComplete(); // Llama a la función de callback si se proporciona
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Efecto para cargar usuarios cuando se monta el componente
  useEffect(() => {
    handleFetchUsuarios(); // Llama a la función para obtener usuarios al cargar el componente
  }, []);

  return (
    <div>
      {loading && <p>Cargando usuarios...</p>}
      {error && <p>Error: {error}</p>}
      {usuarios.length > 0 && (
        <div>
          <h2>Lista de Usuarios:</h2>
          <ul>
            {usuarios.map(usuario => (
              <li key={usuario.id}>
                <p>Nombre: {usuario.nombre}</p>
                <p>Email: {usuario.email}</p>
                <p>Edad: {usuario.edad}</p>
                <p>rol: {usuario.rol}</p>
                {/* Agrega más campos según tu estructura de datos */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Usuarios;
