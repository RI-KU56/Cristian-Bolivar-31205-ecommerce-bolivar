import React from 'react';
import './styles/CartWidget.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


function CartWidget({items}) {
    return (
    <>
    <div className="cart-widget">
        <FontAwesomeIcon icon={faCartShopping} size="2x"/>
        <div className="qty-display">{items}</div>
    </div>
    </>
    )
}

export default CartWidget