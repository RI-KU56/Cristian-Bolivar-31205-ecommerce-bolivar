import React from "react";
import { ItemDetailButton } from "./ItemDetail";


function ItemCount({min,max,reset,count,stock,product_name}) {
  console.log("En item count:" + count);
    return (
      <>
        <div className="btn-group" role="group" aria-label="Basic example">
          <table className="table-sm mx-auto">
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
                <td align="center">
                  <ItemDetailButton contador={count} />
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