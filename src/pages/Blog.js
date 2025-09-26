import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import Button from '../components/Button';

// Datos falsos para los artículos del blog (ahora 6)
const blogPosts = [
  {
    icon: "📰",
    title: "Las 5 tendencias de React para 2024",
    description: "Explora las nuevas características y patrones que están definiendo el futuro del desarrollo con React.",
    color: "#0d6efd"
  },
  {
    icon: "💡",
    title: "Guía completa de CSS Grid",
    description: "Aprende a maquetar sitios web complejos de una manera simple y poderosa con CSS Grid Layout.",
    color: "#198754"
  },
  {
    icon: "📈",
    title: "Cómo optimizar el rendimiento de tu web",
    description: "Consejos y trucos prácticos para que tu sitio cargue más rápido y ofrezca una mejor experiencia.",
    color: "#ffc107"
  },
  {
    icon: "⚙️",
    title: "Automatización con Node.js",
    description: "Descubre cómo crear scripts para automatizar tareas repetitivas y mejorar tu flujo de trabajo.",
    color: "#6c757d"
  },
  {
    icon: "🎨",
    title: "Diseño Responsivo: Mejores Prácticas",
    description: "Asegura que tu sitio se vea increíble en cualquier dispositivo, desde móviles hasta computadoras de escritorio.",
    color: "#6f42c1"
  },
  {
    icon: "☁️",
    title: "Despliega tu App React en 5 Minutos",
    description: "Una guía paso a paso para publicar tu aplicación en la web usando servicios como Vercel o Netlify.",
    color: "#dc3545"
  }
];

function Blog() {
  return (
    <div style={{ paddingTop: '70px', minHeight: '80vh' }}>
      <Hero
        title="Nuestro Blog"
        description="Artículos, tutoriales y noticias sobre el mundo del desarrollo web."
        backgroundImage="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf"
      />

      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <div className="row">
            {blogPosts.map((post, index) => (
              <div className="col-lg-4 col-md-6 mb-4 d-flex flex-column" key={index}>
                <div className="flex-grow-1">
                  <Card
                    icon={post.icon}
                    title={post.title}
                    description={post.description}
                    color={post.color}
                  />
                </div>
                <div className="mt-3 text-center">
                  <Button
                    text="Leer más"
                    link={`/blog/post-${index + 1}`} // Enlace dinámico
                    color="secondary"
                    size="small"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;

