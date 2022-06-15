import React from 'react';
import './styles/ItemDetail.css';
import  ItemCount from './CountContainer';


function ItemDetail({jsonpack}) {
  console.log("Detalle de ItemDetail:",jsonpack);
    return (
      <>
        <div className="item-detail-contenedor">
          <div className="item-detail-featured-img">
            <img
              className="item-detail-img grow"
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
                stock={jsonpack.stock}
                initial={1}
            />
          </div>
        </div>
      </>
    );
}

export default ItemDetail