import React from 'react';
import './styles/NavBar.css';
import logoNav from '../images/logo.png';
import { Link } from "react-router-dom";
import { Carrito } from './CartWidget';

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to={`/`}>
            <img src={logoNav} width='50' alt='Logo navbar'/>
          </Link>
          <span className="navbar-text px-4 glitch">
            Tienda PC Componentes
          </span>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item header__link">
                <Link className="nav-link" to={`/categories`}>
                  Inicio
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to='/' id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><Link className="nav-link dropdown-item" to={`/categories/1`}>Memoria RAM</Link></li>
                  <li><Link className="nav-link dropdown-item" to={`/categories/2`}>Chasis ATX</Link></li>
                  <li><Link className="nav-link dropdown-item" to={`/categories/3`}>Placa Madre</Link></li>
                  <li><Link className="nav-link dropdown-item" to={`/categories/4`}>Mouse</Link></li>
                  <li><Link className="nav-link dropdown-item" to={`/categories/5`}>Disipador</Link></li>
                  <li><Link className="nav-link dropdown-item" to={`/categories/6`}>Graficas</Link></li>
                </ul>
              </li>
              <li className="nav-item header__link">
                <Link className="nav-link" to='/'>
                  Contacto
                </Link>
              </li>
            </ul>
              <Carrito />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar