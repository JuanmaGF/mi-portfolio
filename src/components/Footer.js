import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 MiPortafolio. Todos los derechos reservados.</p>
      <p className="footer-link">
        <a href="/privacy-policy" className="footer-link-text">Política de privacidad</a> | <a href="/terms" className="footer-link-text">Términos y condiciones</a>
      </p>
    </footer>
  );
}

export default Footer;
