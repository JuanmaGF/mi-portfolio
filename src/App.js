import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SobreMi from './components/SobreMi';
import Habilidades from './components/Habilidades';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Contenedor para el contenido principal */}
        <div className="content">
        <Navbar />
          <Routes>
            <Route path="/" element={<SobreMi />} />
            <Route path="/habilidades" element={<Habilidades />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

