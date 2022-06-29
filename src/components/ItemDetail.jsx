import React from 'react';
import './styles/ItemDetail.css';
import ItemCount from "./ItemCount";

function ItemDetail({detail,cargandoDetail}) {

  //const {descripcion, precio,imagenUrl} = detail
  const {imgUrl, tipoComponente, marca, descripcion, precio, stock, id} = detail

return (
  <>
    <div className="item-detail-contenedor mx-auto" style={{display:'flex', flexWrap:'wrap'}}>
          <div className="item-detail-featured-img">
            <img
              className="item-detail-img grow img-fluid"
              src={imgUrl}
              alt="imagen del producto"
            />
          </div>
          <div className="item-detail-info">
            <h2>{tipoComponente}</h2>
            <h6>Marca: {marca}</h6>
            <p>Descripcion: {descripcion}</p>
            <p>Cantidad disponible: {stock}</p>
            <h4>Precio: ${precio}</h4>

            <ItemCount detail = {detail}/>      

          </div>
      </div>

  </>
  
)
}

export default ItemDetail