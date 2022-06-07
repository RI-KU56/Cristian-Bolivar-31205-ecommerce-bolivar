import React from 'react'

function Item({ jsonpack }) {

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
                <a href="#/" className="btn btn-primary">
                Ver Detalle
                </a>
            </div>
            </div>
        </>
    );
}

export default Item