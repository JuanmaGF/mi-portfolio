import React from 'react';
import { FaReact, FaPython, FaStripe, FaDatabase } from 'react-icons/fa'; // Importar íconos de React Icons
import { DiJavascript1 } from 'react-icons/di'; // Otros íconos
import './Proyectos.css';

function Proyectos() {
  return (
    <div className="proyectos" id="proyectos">
      <h2>Proyectos</h2>
      <p>Aquí podrás encontrar algunos de mis proyectos:</p>

      <div className="proyectos-container">
        {/* Proyecto 1 */}
        <div className="proyecto-item">
          <h3>PodCrafters Academy</h3>
          <p>
            Academia formativa para personas interesadas en el mundo del podcast en la que los
            usuarios se registran de forma gratuita y pueden acceder a una variedad de cursos y rutas formativas de pago. Algunas
            de las funcionalidades son: Integración con Calendly para agendar mentorías con los profesores de los cursos, carrito de
            compra y pasarela de pago.
          </p>
          <div className="tecnologias-y-boton">
            <div className="tecnologias">
              <h4>Tecnologías utilizadas:</h4>
              <div className="icons">
                <FaReact size={30} color="#61DBFB" title="React.js" />
                <FaPython size={30} color="#306998" title="Python" />
                <FaStripe size={30} color="#6772E5" title="Stripe" />
                <DiJavascript1 size={30} color="#F0DB4F" title="JavaScript" />
                <FaDatabase size={30} color="#f4a300" title="SQLAlchemy" />
              </div>
            </div>
            <div className="proyecto-enlace">
              <a
                href="https://github.com/JuanmaGF/PodCrafters-Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="proyecto-boton"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="proyecto-item">
          <h3>El Rincon del CYP</h3>
          <p>
            Proyecto de tienda online en el que los usuarios pueden registrarse, hacer login, añadir productos al carrito y comprarlos.
          </p>
          <div className="tecnologias-y-boton">
            <div className="tecnologias">
              <h4>Tecnologías utilizadas:</h4>
              <div className="icons">
                <FaReact size={30} color="#61DBFB" title="React.js" />
                <FaPython size={30} color="#306998" title="Python" />
                <DiJavascript1 size={30} color="#F0DB4F" title="JavaScript" />
                <FaDatabase size={30} color="#f4a300" title="SQLAlchemy" />
              </div>
            </div>
            <div className="proyecto-enlace">
              <a
                href="https://github.com/JuanmaGF/ElRinconDelCYP"
                target="_blank"
                rel="noopener noreferrer"
                className="proyecto-boton"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;
