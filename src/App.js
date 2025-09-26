import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa tus componentes de página
import Home from './pages/Home';
import About from './pages/About';
import Servicios from './pages/Servicios';
import Portafolio from './pages/Portafolio';
import Blog from './pages/Blog';
import Contacto from './pages/Contacto'; // 1. Importa la nueva página

// Importa tu nuevo Navbar
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      {/* El Navbar se mostrará en todas las páginas */}
      <Navbar />

      {/* Las Routes definen qué componente mostrar para cada URL */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} /> {/* 2. Agrega la nueva ruta */}
      </Routes>
    </Router>
  );
}

export default App;

