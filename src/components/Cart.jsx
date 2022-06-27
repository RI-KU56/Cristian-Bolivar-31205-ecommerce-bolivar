import { Badge, Table, Button } from "react-bootstrap";
import React, { useState, useEffect, useContext, createContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import DelButton from "./DelButton";


const Cart = () => {
  const { carts, cartlength, clear, total, removeitem } =
    useContext(CartContext);
  console.log("En carrito largo de carrito:" + cartlength());

  if (cartlength() > 0) {
    let copyarray = [];
    let goodarray = [];
    let ListTemplate;
    let i = 0;

    let itemidarray = [];

    while (i < carts.length) {
      copyarray[i] = carts[i];
      itemidarray[i] = carts[i].itemid;
      i++;
    }

    itemidarray = [...new Set(itemidarray)];
    i = 0;
    let id;
    let j = 0;
    let price;
    let name;
    while (i < itemidarray.length) {
      let sum = 0;
      for (j = 0; j < copyarray.length; j++) {
        if (copyarray[j].itemid == itemidarray[i]) {
          sum = copyarray[j].count + sum;
          price = copyarray[j].itemprice;
          name = copyarray[j].productname;
        }
      }

      id = itemidarray[i];
      goodarray.push({ id, name, sum, price });

      i++;
    }

    ListTemplate = goodarray.map((element) => (
      <tr key={element.id}>
        <td>{element.name}</td>
        <td>{element.sum}</td>
        <td>{element.price}</td>
        <td>
          <DelButton itemid={id} />
        </td>
      </tr>
    ));

    return (
      <>
        <table className="table table-info table-bordered border-primary">
          <thead className="table-dark">
            <tr>
              <th>Item</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Quitar Item</th>
            </tr>
          </thead>
          <tbody>
            {ListTemplate}
            <tr>
              <td colspan="3">Total a Pagar:</td>
              <td>{total()}</td>
            </tr>
            <tr>
              <td colspan="4">
                <Link to={'/'}>
                  <button type="button" className='btn btn-secondary'>
                    Terminar compra
                  </button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </>
    );
  } else {
    return (
      <Badge variant="secondary">
        El Carrito se encuentra vacio, por favor escoger items
        <Link to={"/categories"}>
          <button>Volver</button>
        </Link>
      </Badge>
    );
  }
};

export default Cart;
