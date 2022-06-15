import React from 'react'
import { Link } from 'react-router-dom';

function Item({jsonpack}) {

    const itemid = jsonpack.id;
    console.log(itemid);

    return (
        <>
            <div className="card" style={{ width: "15rem", margin: 20 }}>
            <img src={jsonpack.imgUrl} className="card-img-top" alt="imagen producto" style={{width: "220px", height: "200px", display:"block", margin:"auto"}}/>
                <div className="card-body">
                    <h5 className="card-title">{jsonpack.tipoComponente}</h5>
                    <p className="card-text">
                        Marca: {jsonpack.marca}
                    <br />
                    </p>
                    <p className="card-text">
                        Precio: ${jsonpack.precio}
                    <br />
                    </p>
                    <Link to={`/item/${itemid}`}>
                        <button className="btn btn-primary">Ver Detalle</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Item