import './App.css';
import { useState } from 'react';
import Usuarios from './Componentes/Usuarios';
import InsertarUsuario from './Componentes/Insertar';

function App() {
  const [view, setView] = useState(null); // Controla qué vista se muestra

  const handleViewChange = (newView) => setView(newView); // Cambia la vista actual

  return (
    <div className="App">
      <header>
        <h1>Bienvenido a nuestra API de usuarios</h1>
      </header>
      <p>Explora las funcionalidades de nuestra API. Aquí puedes gestionar usuarios, obtener información detallada y mucho más.</p>
      <p>Visita nuestras rutas disponibles:</p>

      <div className="buttons">
        <button onClick={() => handleViewChange('usuarios')}>Ver todos los usuarios</button>
        <button><a href="http://localhost:3001/api/autenticar">Login</a></button>
        <button onClick={() => handleViewChange('insertar')}>Insertar nuevo usuario</button><br/>
      </div>

      {/* Renderizado condicional de las vistas */}
      {view === 'usuarios' && <Usuarios />}
      {view === 'insertar' && <InsertarUsuario />}

      <footer>
        <p>&copy; 2024 Nuestra API de Usuarios</p>
      </footer>
    </div>
  );
}

export default App;
