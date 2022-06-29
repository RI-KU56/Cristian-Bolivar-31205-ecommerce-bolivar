import React, { useState, useEffect, useContext, createContext } from "react";
import { MiContexto } from './CartContext';
import { Link } from "react-router-dom";
import './styles/Cart.css'

export default function Cart() {
  const {PrecioTotalProductos,cart,removeItem,clearCart} = useContext (MiContexto);
  console.log(PrecioTotalProductos)
  const carritoVacio = cart.length === 0
  return (
    <>
    <h1 className="Titulo">Mi Carrito</h1>
      {
      carritoVacio ?
      <>
      <div className="CarritoVacio">
        <h2>Tu carrito está vacío</h2>
        <Link to= '/inicio'><button type="button" class="btn btn-primary btn-lg">volver a los productos</button></Link>
      </div>  
      </>
      :
      <> 
        <div className = "ItemCarritoTitulo bg-secondary text-white">
          <div>IMAGEN</div>
          <div>MARCA</div>
          <div>COMPONENTE</div>
          <div>VALOR</div>
          <div>CANTIDAD</div>
          <div>SUBTOTAL</div>
          <div>ELIMINAR</div>
        </div>
        {cart.map(producto => (
          <div className = "ItemCarrito bg-secondary text-white" key={producto.id} >
            <div><img className="ImagenItem" src={producto.imgUrl} alt ={producto.tipoComponente}/></div>
            <div>{producto.marca}</div>
            <div>{producto.tipoComponente}</div>
            <div>$ {producto.precio}</div>
            <div>x {producto.cantidad}</div>
            <div>Subtotal: {producto.precio*producto.cantidad}</div>
            <button type="button" className="btn btn-danger" onClick={()=>removeItem(producto.id)}>X</button>
          </div>) )}
        <div className="FueraDelMap">
          <p className="Letra">Precio Final : {PrecioTotalProductos()} </p>
          <button type="button" className="btn btn-danger" onClick={()=> clearCart()}>eliminar todo lo productos del carrito</button>
        </div> 
        <div className="FueraDelMap">
          <button type="button" class="btn btn-success btn-lg" onClick={()=> clearCart()}>Terminar compra</button>
        </div> 
      </>
      }
    </>
  )
}
