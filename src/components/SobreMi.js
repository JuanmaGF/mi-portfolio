import React from 'react';
import './SobreMi.css';
import { FaLaptopCode, FaCogs, FaChalkboardTeacher, FaGithub } from 'react-icons/fa'; // Añadimos iconos

function SobreMi() {
  return (
    <section className="sobre-mi-section text-white py-5">
      <div className="container sobre-mi-container">
        <div className="sobre-mi-header">
          <h1 className="display-4 saludo animate__animated animate__fadeIn">¡Hola! Soy Juanma</h1>
          <p className="lead sobre-mi-text fade-in-delay-1">
            Soy un desarrollador fullstack apasionado por la tecnología y la innovación. Me enfoco en crear soluciones completas y eficientes.
          </p>
        </div>

        <div className="sobre-mi-skills">
          <h3 className="skills-title fade-in-delay-2">Lo que me motiva</h3>
          <div className="skills-icons">
            <div className="skill-item fade-in-delay-3">
              <FaLaptopCode className="skill-icon" />
              <p>Desarrollo Fullstack</p>
            </div>
            <div className="skill-item fade-in-delay-4">
              <FaCogs className="skill-icon" />
              <p>Optimización y soluciones escalables</p>
            </div>
            <div className="skill-item fade-in-delay-5">
              <FaChalkboardTeacher className="skill-icon" />
              <p>Colaboración y mentoring</p>
            </div>
          </div>
        </div>

        <div className="sobre-mi-description">
          <p className="sobre-mi-text fade-in-delay-7">
            Mi objetivo es hacer de cada proyecto una experiencia única, contribuyendo al crecimiento del equipo y logrando resultados impactantes.
          </p>
        </div>

        <div className="sobre-mi-cta fade-in-delay-8">
          <div className="cta-container">
            <a href="/micv.pdf" download className="download-btn">
              <span className="btn-text">Descargar mi CV</span>
            </a>
            <a href="https://github.com/JuanmaGF" target="_blank" rel="noopener noreferrer" className="github-btn">
              <FaGithub className="github-icon" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;
