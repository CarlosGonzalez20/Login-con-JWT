// App.js
import './App.css';
import { useState } from 'react';
import Usuarios from './Componentes/Usuarios'; // Asegúrate de que la ruta sea correcta

function App() {
  const [showUsuarios, setShowUsuarios] = useState(false); // Estado para mostrar la lista de usuarios

  const handleShowUsuarios = () => {
    setShowUsuarios(true); // Cambia el estado para mostrar usuarios
  };

  return (
    <div className="App">
      <header>
        <h1>Bienvenido a nuestra API</h1>
      </header>
      <p>Explora las funcionalidades de nuestra API. Aquí puedes gestionar productos, obtener información detallada y mucho más.</p>
      <p>Visita nuestras rutas disponibles:</p>
      <div className="buttons">
        <button onClick={handleShowUsuarios}>Ver todos los usuarios</button>
        <button><a href="http://localhost:3001/api/autenticar">Login</a></button>
        <button><a href="http://localhost:3001/api/nuevoUsuario">Insertar nuevo usuario</a></button><br />
        <button><a href="http://localhost:3001/api/actualizarUsuario">Actualizar usuario</a></button>
        <button><a href="http://localhost:3001/api/borrarUsuario">Borrar usuario</a></button>
      </div>
      
      {/* Condicional para mostrar el componente Usuarios */}
      {showUsuarios && <Usuarios />}
      
      <footer>
        <p>&copy; 2024 Nuestra API de Usuarios</p>
      </footer>
    </div>
  );
}

export default App;
