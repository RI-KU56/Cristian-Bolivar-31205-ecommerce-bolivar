import React from 'react';
import './styles/NavBar.css';
import logoNav from '../images/logo.png';
import { Link } from "react-router-dom";
import CartWidget from './CartWidget';
import Categories from './Categories';

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
                <Link className="nav-link" to={`/inicio`}>
                  Inicio
                </Link>
              </li>
                <Categories/>
              <li className="nav-item header__link">
                {/* <Link className="nav-link" to='/contacto'>
                  Contacto
                </Link> */}
              </li>
            </ul>
              <CartWidget/>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar