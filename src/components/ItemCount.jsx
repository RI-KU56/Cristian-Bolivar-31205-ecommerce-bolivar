import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "./CartContext";
import { Link, useParams } from "react-router-dom";
import { ItemDetailButton } from "./ItemDetail";

const ItemCount = ({ productname, stock, initial, productid, itemprice }) => {
  const [count, setCount] = useState(initial);
  const { itemid } = useParams();
  const { additem, additem2, carts, cartlength, isInCartIndex, removeitem } =
    useContext(CartContext);

  const add = () => {
    if (count + 1 > stock) {
      alert("Superaste la cantidad de items en stock");
    } else {
      setCount(count + 1);
    }
  };

  const sub = () => {
    if (count === 0) alert("Debes agregar al menos un item al carrito");
    else setCount(count - 1);
  };

  const reset = () => {
    setCount(initial)
  }

  const onAdd = () => {
    alert("Tus productos se agregaron al carrito")
  }

  console.log(
    "ver contenido de carts",
    carts.map((cart) => cart.productname)
  );

  console.log("New cartlength function", cartlength());

  return (
    <>
      <div className="btn-group" role="group" aria-label="Basic example">
          <table className="table-sm mx-auto">
            <thead>
              <tr>
                {/* <th colspan="3" align="center">{productname}</th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="center" colspan="1">
                  <button type="button" className="btn btn-outline-danger" onClick={sub}>
                    -
                  </button>
                </td>
                <td colspan="2" className="text-center" align="center">{count}</td>
                <td align="center" colspan="1">
                  <button type="button" className="btn btn-outline-success" onClick={add}>
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td colspan="2" align="center" onClick={onAdd}>
                  <button
                    type="button" 
                    className='btn btn-secondary'
                    disabled={count === 0}
                    id="but2"
                    onClick={() =>
                      additem(
                        { productname },
                        { itemid },
                        { count },
                        { itemprice }
                      )
                    }
                  >
                    Agregar a carrito
                  </button>
                </td>
                <td colspan="2" align="center"> 
                  <Link to={'/cart'}>
                    <button type="button" className='btn btn-secondary'>
                      Ir al Carrito
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td colspan="4" align="center"> 
                  <button type="button" className='btn btn-secondary' onClick={reset} disabled={count === 0}>
                    Reset
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    </>
  );
};

export default ItemCount;