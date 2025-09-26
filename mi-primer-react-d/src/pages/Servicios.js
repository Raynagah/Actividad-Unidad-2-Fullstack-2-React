import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Button from '../components/Button';

// Datos de los servicios para no repetir código
const servicesData = [
  {
    icon: "💻",
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, rápidos y responsivos utilizando las últimas tecnologías del mercado.",
    color: "#0d6efd"
  },
  {
    icon: "🎨",
    title: "Diseño UI/UX",
    description: "Diseñamos interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
    color: "#6f42c1"
  },
  {
    icon: "📱",
    title: "Aplicaciones Móviles",
    description: "Desarrollamos aplicaciones nativas para iOS y Android que cumplen con tus objetivos de negocio.",
    color: "#198754"
  },
  {
    icon: "☁️",
    title: "Soluciones en la Nube",
    description: "Implementamos y gestionamos infraestructura en la nube para escalar tus aplicaciones.",
    color: "#ffc107"
  },
  {
    icon: "📊",
    title: "Análisis de Datos",
    description: "Extraemos información valiosa de tus datos para ayudarte a tomar mejores decisiones.",
    color: "#0dcaf0"
  },
  {
    icon: "🚀",
    title: "Marketing Digital",
    description: "Potenciamos tu presencia en línea a través de estrategias de SEO y marketing de contenidos.",
    color: "#dc3545"
  }
];

function Servicios() {
  return (
    <div style={{ paddingTop: '70px', minHeight: '80vh' }}>
      {/* 1. Componente Hero */}
      <Hero
        title="Nuestros Servicios"
        description="Ofrecemos soluciones integrales para llevar tu proyecto al siguiente nivel."
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978"
      />

      {/* 2. Sección de 6 Cards */}
      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            {servicesData.map((service, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <Card
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  color={service.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Llamada a la acción con Button */}
      <section className="py-5 text-center">
        <div className="container">
          <h2>¿Interesado en trabajar con nosotros?</h2>
          <p className="lead text-muted mb-4">Contáctanos para obtener una cotización personalizada.</p>
          <Button
            text="Contactar Ahora"
            link="/contacto" // Asegúrate de que esta ruta exista en tu router
            color="success"
            size="large"
          />
        </div>
      </section>
    </div>
  );
}

export default Servicios;
