import React from "react";
import Hero from '../components/Hero';
import Card from '../components/Card'; // 1. Importa tu nuevo componente

function Home() {
    return (
        // El div principal se mantiene
        <div style={{ paddingTop: '70px', minHeight: '80vh' }}>

            {/**Sección Hero */}
            <Hero
                title="Bienvenido a mi Web con Reactcito"
                description="Mi primera aplicación moderna"
                backgroundImage="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2"
            />

            {/** 2. Reemplaza las tarjetas estáticas con tu componente Card */}
            <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="container">
                    <div className="row">
                        
                        {/* Tarjeta 1 */}
                        <div className="col-md-4 mb-4">
                            <Card
                                icon="🚀"
                                title="Rendimiento Veloz"
                                description="Optimizada para cargar rápidamente y ofrecer una experiencia de usuario fluida."
                                color="#0d6efd"
                            />
                        </div>

                        {/* Tarjeta 2 */}
                        <div className="col-md-4 mb-4">
                            <Card
                                icon="💡"
                                title="Diseño Intuitivo"
                                description="Una interfaz limpia y fácil de usar, diseñada pensando en el usuario final."
                                color="#198754"
                            />
                        </div>

                        {/* Tarjeta 3 */}
                        <div className="col-md-4 mb-4">
                            <Card
                                icon="🔒"
                                title="Seguridad Robusta"
                                description="Tus datos están protegidos con los más altos estándares de seguridad."
                                color="#ffc107"
                            />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;