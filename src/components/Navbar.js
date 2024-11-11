import React from 'react';
import { Link } from 'react-router-dom'; // Importar Link de React Router
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/habilidades">Habilidades</Link>
      <Link to="/proyectos">Proyectos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}

export default Navbar;
