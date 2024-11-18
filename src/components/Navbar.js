import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaHome, FaTools, FaProjectDiagram, FaEnvelope } from 'react-icons/fa'; // Usamos iconos modernos

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h2>Portfolio</h2>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-item">
          <FaHome className="nav-icon" /> Inicio
        </Link>
        <Link to="/habilidades" className="nav-item">
          <FaTools className="nav-icon" /> Habilidades
        </Link>
        <Link to="/proyectos" className="nav-item">
          <FaProjectDiagram className="nav-icon" /> Proyectos
        </Link>
        <Link to="/contacto" className="nav-item">
          <FaEnvelope className="nav-icon" /> Contacto
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

