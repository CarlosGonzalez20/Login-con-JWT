import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <head>
            <title>Bienvenido a la API</title>
        </head>
        <body>
            <header>
                <h1>Bienvenido a nuestra API</h1>
            </header>
            <p>Explora las funcionalidades de nuestra API. Aquí puedes gestionar productos, obtener información detallada y mucho más.</p>
            <p>Visita nuestras rutas disponibles:</p>
            <div className="buttons">
                <button><a href="http://localhost:3001/api/usuarios">Ver todos los usuarios</a></button>
                <button><a href="http://localhost:3001/api/autenticar">Login</a></button>
                <button><a href="http://localhost:3001/api/nuevoUsuario">Insetar nuevo usuario</a></button><br></br>
                <button><a href="http://localhost:3001/api/actualizarUsuario">Actualizar usuario</a></button>
                <button><a href="http://localhost:3001/api/borrarUsuario">Borrar usuario</a></button>
            </div>
            <footer>
                <p>&copy; 2024 Nuestra API de Productos</p>
            </footer>
        </body>
    </div>
  );
}

export default App;
