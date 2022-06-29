import React from 'react'
import { Link } from 'react-router-dom';

function Item({ elemento }) {

    const {imgUrl, tipoComponente, marca, precio, stock, id} = elemento

    return (
        <>
            <div className="card" style={{ width: "15rem", margin: 20 }}>
            <img src={imgUrl} className="card-img-top" alt="imagen producto" style={{width: "220px", height: "200px", display:"block", margin:"auto"}}/>
                <div className="card-body">
                    <h5 className="card-title">{tipoComponente}</h5>
                    <p className="card-text">
                        Marca: {marca}
                    <br />
                    </p>
                    <p className="card-text">
                        Precio: ${precio}
                    <br />
                    </p>
                    <Link to={`/item/${id}`}>
                        <button className="btn btn-primary">Ver Detalle</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Item