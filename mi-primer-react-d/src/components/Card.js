// src/components/Card.js

import React from 'react';
import './Card.css'; // Archivo de estilos que crearemos a continuación

const Card = ({ icon, title, description, color }) => {
  // Estilo en línea para aplicar el color dinámicamente al ícono
  const iconStyle = {
    color: color,
    fontSize: '4rem' // Tamaño del ícono
  };

  return (
    <div className="card-container">
      <div className="card-icon" style={iconStyle}>
        {icon}
      </div>
      <h4 className="card-title">{title}</h4>
      <p className="card-description">{description}</p>
    </div>
  );
};

export default Card;