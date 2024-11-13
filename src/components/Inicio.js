import React from 'react';
import './Inicio.css';
import { Button } from 'react-bootstrap';

function Inicio() {
  return (
    <section className="inicio-section bg-dark text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">¡Bienvenido a mi Portafolio!</h1>
        <a href="/micv.pdf" download>
          <Button variant="primary">Descargar mi CV</Button>
        </a>
      </div>
    </section>
  );
}

export default Inicio;
