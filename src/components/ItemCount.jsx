import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { MiContexto } from './CartContext';

export default function ItemCount({detail}) {

  const {agregarAlCarro} = useContext (MiContexto);
  const [valor,setValor]= useState (1)
    
  const sumarProducto = (evento) => {
    if (valor < detail.stock){
      setValor(valor + 1);
    } else {alert("No se pueden agregar más productos")}
  }
  
  const restarProducto = () => {
    if (valor > 1){ 
      setValor (valor - 1);
    } else {
      alert ("La cantidad mínima es 1")
    }
  }
  
  const onAdd = () => {
    setEventoBoton (false)
    agregarAlCarro (detail,valor)
  }

  const [eventoBoton,setEventoBoton] = useState (true)

  return (
    <>
    { eventoBoton ? 
      <>
      <div className="btn-group" role="group" aria-label="Basic example">
          <table className="table-sm mx-auto">
            <thead>
              <tr>
                {/* <th colspan="3" align="center">{productname}</th> */} 
              </tr>
                </thead>
                <tbody>
              <tr style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <td align="center" colSpan="1">
                  <button type="button" className='btn btn-outline-danger' onClick={() => {restarProducto()}}> - </button>
                </td>
                <td colSpan="2" align="center">{valor}</td>
                <td align="center" colSpan="1">
                  <button type="button" className="btn btn-outline-success" onClick={(evento)=> {sumarProducto(evento)}}> + </button>
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <button type="button" className='btn btn-secondary' onClick={() => {onAdd()}}>Agregar a Carrito</button>
                </td>
              </tr> 
            </tbody>
          </table>
      </div>
      </>
      :
      <> 
      <div style={{paddingRight: "2px", paddingTop: "2px"}}>
        <Link to = '/cart' > <button type="button" className='btn btn-success' >Terminar Compra</button> </Link>
        <Link to ='/inicio'> <button type="button" className='btn btn-secondary'>Seguir Comprando</button> </Link>
      </div>      
      </>
    }
    </>
  )
}