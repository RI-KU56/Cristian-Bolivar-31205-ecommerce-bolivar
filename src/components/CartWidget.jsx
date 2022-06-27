import React, {useContext} from 'react';
import './styles/CartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext';


export const Carrito = () => {
    const {carts,cartlength,clear}=useContext(CartContext);
    console.log("Valor de total en widget");
    console.log("Loading Cartwidget");
        
    return (
        <>
        <div className="cart-widget">
            <Link to={'/cart'}>
                <FontAwesomeIcon icon={faCartShopping} size="2x"/>
            </Link>
            <div className="qty-display">{cartlength()>0 && cartlength()}</div>
        </div>
        </>
    )
}
