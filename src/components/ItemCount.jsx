import React from "react";


function ItemCount({min,max,reset,onAdd,count,stock,product_name}) {
  console.log(count);
    return (
      <>
        <div className="btn-group" role="group" aria-label="Basic example">
          <table className="table-sm">
            <thead>
              <tr>
                <th></th>
                <th>{product_name}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" className="btn btn-outline-danger" onClick={min}>
                    -
                  </button>
                </td>
                <td className="text-center">{count}</td>
                <td>
                  <button type="button" className="btn btn-outline-success" onClick={max}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <button type="button" className='btn-secondary' disabled={count === 0} onClick={() => onAdd(count)}>
                    Agregar al carrito
                  </button>
                </td>
                <td> </td>
              </tr>
              <tr>
                <td> </td>
                <td> 
                  <button type="button" className='btn-secondary' onClick={reset}>
                    Reset
                  </button></td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default ItemCount