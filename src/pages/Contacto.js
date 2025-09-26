import React from 'react';
import Hero from '../components/Hero';
import Button from '../components/Button';
import './Contacto.css'; // Estilos para el formulario

function Contacto() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Previene el envío real del formulario
    alert('Formulario enviado. ¡Gracias por contactarnos!');
    // Aquí iría la lógica para enviar los datos a un servidor
  };

  return (
    <div style={{ paddingTop: '70px', minHeight: '80vh' }}>
      <Hero
        title="Contáctanos"
        description="Estamos aquí para ayudarte. Rellena el formulario y nos pondremos en contacto contigo."
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e"
      />

      <section className="py-5">
        <div className="container">
          <div className="contact-form-container">
            <h2 className="text-center mb-4">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="nombre" className="form-label">Nombre</label>
                  <input type="text" className="form-control" id="nombre" required />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="apellido" className="form-label">Apellido</label>
                  <input type="text" className="form-control" id="apellido" required />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input type="email" className="form-control" id="email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="mensaje" className="form-label">Mensaje</label>
                <textarea className="form-control" id="mensaje" rows="5" required></textarea>
              </div>
              <div className="text-center">
                {/* Usamos un botón de tipo 'submit' dentro del form */}
                <button type="submit" className="btn btn-success btn-large">
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contacto;
