// InsertarUsuario.js
import React, { useState } from 'react';
import './insertar.css';

const InsertarUsuario = () => {
    
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar los datos al backend
    fetch('http://localhost:3001/api/nuevoUsuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nombre, edad, email }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error al insertar el usuario');
        }
        return response.json();
      })
      .then((data) => {
        setMensaje('Usuario insertado con éxito');
        // Limpiar los campos
        setNombre('');
        setEdad('');
        setEmail('');
      })
      .catch((error) => {
        setMensaje(`Error: ${error.message}`);
      });
  };

  return (
    <div>
      <h2>Insertar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit} className='form-group'>
        <div className='contenedor'>
          <label className='form-label'>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className='contenedor'>
          <label className='form-label'>Edad:</label>
          <input
            type="number"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
            required
          />
        </div>
        <div className='contenedor'>
          <label className='form-label'>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default InsertarUsuario;
