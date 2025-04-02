import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#101010" }}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          <img src="../src/assets/logoj.png" alt="Juan Ronco" className="logo img-fluid" />
        </NavLink>
        
        {/* Botón del menú en versión móvil */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => document.getElementById("navbarNav").classList.remove("show")}>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/servicios" onClick={() => document.getElementById("navbarNav").classList.remove("show")}>Servicios</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" onClick={() => document.getElementById("navbarNav").classList.remove("show")}>Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contacto" onClick={() => document.getElementById("navbarNav").classList.remove("show")}>Contacto</NavLink>
            </li>
          </ul>
        </div>
        
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
