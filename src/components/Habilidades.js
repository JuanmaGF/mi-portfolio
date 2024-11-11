import React from 'react';
import './Habilidades.css';

function Habilidades() {
  return (
    <div className="habilidades" id="habilidades">
      <h2>Habilidades</h2>
      <div className="barra-habilidad">
        <span>React.js</span>
        <div className="barra"><div className="barra-progreso react"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>JavaScript</span>
        <div className="barra"><div className="barra-progreso js"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>HTML5</span>
        <div className="barra"><div className="barra-progreso html"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>CSS3</span>
        <div className="barra"><div className="barra-progreso css"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>Bootstrap</span>
        <div className="barra"><div className="barra-progreso bootstrap"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>Python</span>
        <div className="barra"><div className="barra-progreso python"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>Flask</span>
        <div className="barra"><div className="barra-progreso flask"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>SQLAlchemy</span>
        <div className="barra"><div className="barra-progreso sqlalchemy"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>Git</span>
        <div className="barra"><div className="barra-progreso git"></div></div>
      </div>
      <div className="barra-habilidad">
        <span>GitHub</span>
        <div className="barra"><div className="barra-progreso github"></div></div>
      </div>
    </div>
  );
}

export default Habilidades;
