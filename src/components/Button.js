// src/components/Button.js

import React from 'react';
import './Button.css'; // Archivo de estilos que crearemos a continuación

const Button = ({ text, link, color = 'primary', size = 'medium' }) => {
  // Clases CSS dinámicas basadas en las props
  // `btn` es la clase base
  // `btn-${color}` aplica el color (ej: 'btn-primary')
  // `btn-${size}` aplica el tamaño (ej: 'btn-medium')
  const buttonClasses = `btn btn-${color} btn-${size}`;

  return (
    <a href={link} className={buttonClasses}>
      {text}
    </a>
  );
};

export default Button;