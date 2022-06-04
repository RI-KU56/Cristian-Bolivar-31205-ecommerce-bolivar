import React, { useState } from 'react'


function ItemCount({ inicial, stock, onAdd, producName }) {
    
  const [count, setCount] = useState(inicial)

  const sumar = () => {
    count < stock ? setCount(count + 1) : alert('No se pueden agregar mas productos, sin stock!!')
  }

  const restar = () => {
    count > inicial ? setCount(count - 1) : alert('No se pueden quitar mas productos')
  }
  
  const reset = () => {
    setCount(inicial)
  }

    return (
      <>
        <div className="btn-group" role="group" aria-label="Basic example">
          <table className="table-sm">
            <thead>
              <tr>
                <th></th>
                <th>{producName}</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button type="button" className="btn btn-outline-danger" onClick={restar}>
                    -
                  </button>
                </td>
                <td>{count}</td>
                <td>
                  <button type="button" className="btn btn-outline-success" onClick={sumar}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <button type="button" className='btn-secondary' onClick={() => onAdd(count)}>
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