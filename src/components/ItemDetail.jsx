import React from 'react';
import './styles/ItemDetail.css';
import ItemCount from "./ItemCount";


export const ItemDetailButton = ({ contador }) => {
  console.log("Contador:" + contador)

  const onAdd = ({ e }) => {
    console.log("Estoy en onAdd ItemDetail y count:")
    document.getElementById("but1").style.display = "block"//Muestra el boton de agregar al carrito
    document.getElementById("but2").style.display = "none"//Oculta el boton de agregar al carrito
    alert("Tus productos se agregaron al carrito")
  }

  return (
    <>
      <button disabled={contador === 0} id="but2" onClick={onAdd}>
        Agregar a carrito
      </button>
    </>
  )
}

function ItemDetail({ jsonpack }) {
  console.log("Detalle de ItemDetail:", jsonpack)

  function Terminar() {
    window.location.href = "/cart";
  }

  if (jsonpack) {
    return (
      <>
        <div className="item-detail-contenedor mx-auto" style={{display:'flex', flexWrap:'wrap'}}>
          <div className="item-detail-featured-img">
            <img
              className="item-detail-img grow img-fluid"
              src={jsonpack.imgUrl}
              alt="imagen del producto"
            />
          </div>
          <div className="item-detail-info">
            <h2>{jsonpack.tipoComponente}</h2>
            <h6>Marca: {jsonpack.marca}</h6>
            <p>Descripcion: {jsonpack.descripcion}</p>
            <p>Cantidad disponible: {jsonpack.stock}</p>
            <h4>Precio: ${jsonpack.precio}</h4>

            <ItemCount
              productname={jsonpack.tipoComponente}
              stock={jsonpack.stock}
              initial={1}
              productid={jsonpack.id}
              itemprice={jsonpack.precio}
            />

            <button id="but1" style={{ display: "none" }} onClick={Terminar}>
              Terminar mi compra
            </button>

          </div>
        </div>
      </>
    )
  } else {
    return <></>
  }
}

export default ItemDetail