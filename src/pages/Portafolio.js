import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';

// Datos de los proyectos
const portfolioProjects = [
  {
    icon: "🛒",
    title: "E-commerce de Moda",
    description: "Desarrollo de una tienda en línea completa con carrito de compras, pasarela de pago y panel de administración.",
    color: "#dc3545"
  },
  {
    icon: "✈️",
    title: "App de Reservas de Viajes",
    description: "Aplicación web para la búsqueda y reserva de vuelos y hoteles, integrada con múltiples APIs de proveedores.",
    color: "#0dcaf0"
  },
  {
    icon: "🏠",
    title: "Plataforma Inmobiliaria",
    description: "Sitio web para una agencia inmobiliaria con listados de propiedades, mapas interactivos y formularios de contacto.",
    color: "#6f42c1"
  }
];

function Portafolio() {
  return (
    <div style={{ paddingTop: '70px', minHeight: '80vh' }}>
      {/* Hero con Lorem Ipsum */}
      <Hero
        title="Nuestro Portafolio"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        backgroundImage="https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f"
      />

      {/* Galería de 3 proyectos con Cards */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            {portfolioProjects.map((project, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <Card
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  color={project.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portafolio;
