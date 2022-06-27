import React, {useState,useEffect,useContext,createContext} from 'react';
import {CartContext} from './CartContext';

export const DelButton = ({itemid}) => {

    const {removeitem}=useContext(CartContext);
    console.log("Estoy en DelButton con itemid:"+itemid);

    return(
        <button className="btn btn-danger" onClick={()=>removeitem({itemid})}>Eliminar Item</button>
    )
};


export default DelButton;