import React from 'react';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>Si deseas comunicarte conmigo, puedes hacerlo a través de los siguientes medios:</p>
      <div className="contacto-info">
        <div className="contacto-item">
          <FaEnvelope className="contacto-icon" />
          <a href="mailto:jmgf.1996@gmail.com">jmgf.1996@gmail.com</a>
        </div>
        <div className="contacto-item">
          <FaLinkedin className="contacto-icon" />
          <a href="https://www.linkedin.com/in/juanmagf/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        
        
      </div>
    </div>
  );
};

export default Contacto;
