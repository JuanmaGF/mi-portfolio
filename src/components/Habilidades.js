import React from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaPython, FaFlask, FaGitAlt, FaGithub } from 'react-icons/fa';
import './Habilidades.css';

function Habilidades() {
  return (
    <div className="habilidades" id="habilidades">
      <h2>Habilidades</h2>
      
      <div className="habilidades-seccion">
        <h3>Frontend</h3>
        <div className="habilidades-container">
          <div className="habilidad-item">
            <FaReact className="habilidad-icon react" />
            <span>React.js</span>
          </div>
          <div className="habilidad-item">
            <FaJs className="habilidad-icon js" />
            <span>JavaScript</span>
          </div>
          <div className="habilidad-item">
            <FaHtml5 className="habilidad-icon html" />
            <span>HTML5</span>
          </div>
          <div className="habilidad-item">
            <FaCss3Alt className="habilidad-icon css" />
            <span>CSS3</span>
          </div>
          <div className="habilidad-item">
            <FaBootstrap className="habilidad-icon bootstrap" />
            <span>Bootstrap</span>
          </div>
        </div>
      </div>

      <div className="habilidades-seccion">
        <h3>Backend</h3>
        <div className="habilidades-container">
          <div className="habilidad-item">
            <FaPython className="habilidad-icon python" />
            <span>Python</span>
          </div>
          <div className="habilidad-item">
            <FaFlask className="habilidad-icon flask" />
            <span>Flask</span>
          </div>
          <div className="habilidad-item">
            <FaGitAlt className="habilidad-icon git" />
            <span>Git</span>
          </div>
          <div className="habilidad-item">
            <FaGithub className="habilidad-icon github" />
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
