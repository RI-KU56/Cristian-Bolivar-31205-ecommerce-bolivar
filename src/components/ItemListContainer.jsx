import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import jsonpack from './productos.json'

function ItemListContainer({ name }) {
    const {categoryid} = useParams()

    const[cat, setCat] = useState(categoryid)
    const[item, setItems] = useState([]);
    const call = new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(jsonpack)
        }, 2000)
    })

    call.then(response => {
        setItems(response)
    })

    console.log(cat);

    return (
        <>
        <ItemList items={item} />
        </>
    )
}

export default ItemListContainer