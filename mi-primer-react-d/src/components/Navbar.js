import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          MiReactApp
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
              Nosotros
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/servicios" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
              Servicios
            </NavLink>
          </li>
           <li className="nav-item">
            <NavLink to="/portafolio" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
              Portafolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
              Blog
            </NavLink>
          </li>
          {/* Nuevo enlace a Contacto */}
          <li className="nav-item">
            <NavLink to="/contacto" className={({ isActive }) => "nav-links" + (isActive ? " activated" : "")}>
              Contacto
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

