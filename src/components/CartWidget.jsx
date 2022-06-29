import React, {useContext} from 'react';
import './styles/CartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {MiContexto} from './CartContext';

export default function CartWidget() {
    const {cantidadProductos,cart} = useContext (MiContexto);
    const carritoVacio = cart.length === 0

    return (
        <>
        <div className="cart-widget">
        {
            carritoVacio ? 
            <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} size="2x"/></Link>
            :
            <>
            <Link to='/cart'><FontAwesomeIcon icon={faCartShopping} size="2x"/></Link>
            <div className="qty-display">{cantidadProductos(cart)}</div>
            </>
        }
        </div>
        </>
    )
}
