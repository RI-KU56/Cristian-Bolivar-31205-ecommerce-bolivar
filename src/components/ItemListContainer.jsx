import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import jsonpack from './productos.json'

function ItemListContainer({ name }) {
    const {categoryid} = useParams()

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const[cat, setCat] = useState(categoryid)
    const[item, setItems] = useState([]);

    useEffect(() => {
        const call = new Promise((resolve,reject) => {
            setTimeout(()=>{
                resolve(jsonpack)
            }, 2000)
        })
    
        call.then(response => {
            setItems(response)
        })

        call.catch((error) => {
            setError(true)
            console.log(error)
        })

        call.finally(() => {
            setLoading(false)
        })
    
        console.log(cat);
    }, [])

    return (
        <>
        <div>
            {name}
        
            <div>{loading && "Loading..."}</div>
            <div>{error && "Hubo un error en el pago"}</div>

            <ItemList items={item} />
        </div>
        </>
    )
}

export default ItemListContainer