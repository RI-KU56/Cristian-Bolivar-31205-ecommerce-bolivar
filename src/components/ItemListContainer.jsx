import React, { useState } from 'react'
import ItemList from './ItemList';
import jsonpack from './productos.json'

function ItemListContainer() {

    const[item, setItems] = useState([]);
    const call = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(jsonpack)
        }, 2000)
    })

    call.then(response => {
        setItems(response)
    })

    return (
        <>
        <ItemList items={item} />
        </>
    )
}

export default ItemListContainer