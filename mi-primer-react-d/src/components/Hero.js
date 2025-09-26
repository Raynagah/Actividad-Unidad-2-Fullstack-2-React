// src/components/Hero.js

import React from 'react';
import './Hero.css';
import Button from './Button'; // 1. Importamos el componente Button

const Hero = ({ title, description, backgroundImage }) => {
  const heroStyle = {
    backgroundImage: `url(${backgroundImage})`
  };

  return (
    <div className="hero-container" style={heroStyle}>
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        
        {/* 2. Usamos el componente Button aquí */}
        <Button 
          text="Comenzar Ahora" 
          link="/contact" 
          color="primary" 
          size="large" 
        />
      </div>
    </div>
  );
};

export default Hero;