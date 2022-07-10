import React, { useContext } from "react";
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
      <div >
        <div class="table-responsive">
          <table className="table table-bordered border-primary table-striped table-hover table-info">
              <thead className="table-dark">
                <tr>
                  <th scope="col">IMAGEN</th>
                  <th scope="col">MARCA</th>
                  <th scope="col">COMPONENTE</th>
                  <th scope="col">VALOR</th>
                  <th scope="col">CANTIDAD</th>
                  <th scope="col">SUBTOTAL</th>
                  <th scope="col">ELIMINAR</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(producto => (
                  <tr key={producto.id}>
                    <td><img className="ImagenItem" src={producto.imgUrl} alt ={producto.tipoComponente}/></td>
                    <td>{producto.marca}</td>
                    <td>{producto.tipoComponente}</td>
                    <td>$ {producto.precio}</td>
                    <td>x {producto.cantidad}</td>
                    <td>Subtotal: {producto.precio*producto.cantidad}</td>
                    <td><button type="button" className="btn btn-danger" onClick={()=>removeItem(producto.id)}>X</button></td>
                  </tr>))}
              </tbody>
              <tfoot>
                <tr className="text-center">
                  <th scope="row" colspan="4"><p className="Letra">Precio Final : {PrecioTotalProductos()} </p></th>
                  <th scope="row" colspan="3"><button type="button" className="btn btn-danger" onClick={()=> clearCart()}>eliminar todo lo productos del carrito</button></th>
                </tr>
                <tr className="text-center">
                  <th scope="row" colspan="7">
                  <Link to = '/checkout'>
                    <button type="button" class="btn btn-success btn-lg">Terminar compra</button>
                  </Link>
                  </th>
                </tr>
              </tfoot>
          </table>
        </div>
      </div>
      </>

      }
    </>
  )
}