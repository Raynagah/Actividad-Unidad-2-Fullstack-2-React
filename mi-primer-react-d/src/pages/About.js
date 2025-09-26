import React from "react";
import Hero from '../components/Hero';
import Card from "../components/Card"; // 1. ¡Importa el componente Card!

function About() {
    return (
        <div style={{ paddingTop: '70px', minHeight: '80vh' }}>
            
            {/**Sección Hero */}
            <Hero
                title="Sobre Nosotros"
                description="Conoce la historia y el equipo detrás de este proyecto."
                backgroundImage="https://images.unsplash.com/photo-1472214103451-9374bd1c798e"
            />

            {/** 2. Reemplaza el contenido con tu componente Card */}
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">

                        {/* Tarjeta 1 */}
                        <div className="col-md-4 mb-4">
                            <Card
                                icon="💖"
                                title="Pasión"
                                description="Amamos lo que hacemos y nos dedicamos a entregar un producto excepcional."
                                color="#dc3545"
                            />
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="col-md-4 mb-4">
                           <Card
                                icon="🌄"
                                title="Visión"
                                description="Miramos siempre hacia el futuro para innovar y estar a la vanguardia."
                                color="#6f42c1"
                            />
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="col-md-4 mb-4">
                            <Card
                                icon="🤝"
                                title="Compromiso"
                                description="Estamos comprometidos con la calidad y la satisfacción de nuestros usuarios."
                                color="#0d6efd"
                            />
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;