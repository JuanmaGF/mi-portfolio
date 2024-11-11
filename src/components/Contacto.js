// Contacto.js
import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  // Estados para cada campo del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes procesar el formulario o enviarlo a un servidor
    console.log('Formulario enviado', { name, email, message });

    // Reseteamos el formulario después de enviarlo
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contacto">
      <h2>Contacto</h2>
      <p>Si tienes alguna pregunta, no dudes en enviarme un mensaje.</p>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
