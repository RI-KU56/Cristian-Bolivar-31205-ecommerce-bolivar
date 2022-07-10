import React from 'react';
import './styles/ItemDetail.css';
import ItemCount from "./ItemCount";

function ItemDetail({detail,cargandoDetail}) {

  const {imgUrl, tipoComponente, marca, descripcion, precio, stock, id} = detail

return (
  <>
    <div className="item-detail-contenedor mx-auto" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
          <div className="item-detail-featured-img">
            <img
              className="item-detail-img grow img-fluid"
              src={imgUrl}
              alt="imagen del producto"
            />
          </div>
          <div className="item-detail-info" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <h2>{tipoComponente}</h2>
            <h6>Marca: {marca}</h6>
            <p>Descripcion: {descripcion}</p>
            <p>Cantidad disponible: {stock}</p>
            <h4>Precio: ${precio}</h4>

            <div>
            <ItemCount detail = {detail}/>  
            </div>    
          </div>
      </div>

  </>
  
)
}

export default ItemDetail