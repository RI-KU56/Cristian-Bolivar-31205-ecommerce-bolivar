
import React from 'react';
import  ItemCount from './CountContainer';


function ItemDetail({jsonpack}) {
  console.log(jsonpack);
    return (
      <>
        <div id="centerman" align="center">
          <div className="card" style={{ width: "15rem", margin: 20 }}>
            <img src={jsonpack.thumbnail} className="card-img-top" alt="imagen producto" style={{width: "220px", height: "200px", display:"block", margin:"auto"}}/>
            <div className="card-body">
              <h5 className="card-title">{jsonpack.title}</h5>
              <p className="card-text">
                Precio: ${jsonpack.price}
                <br />
              </p>
              <p className="card-text">
                Cantidad: {jsonpack.available_quantity}
                <br />
              </p>
            </div>
            <div className="card-footer">
              <ItemCount
                stock={jsonpack.available_quantity}
                initial={1}
              />
            </div>
          </div>
        </div>
      </>
    );
}

export default ItemDetail
