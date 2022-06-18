import React, {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from "./ItemDetail";
import productos from './productos.json'


function ItemDetailContainer({ items }) {
  const[producto, setProducto] = useState([])
  const{itemid} = useParams()

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (items) {
      console.log("Item fue definido");
    } else {
      items = productos;
      console.log("Malas noticias, no se definio el item");
    }

    const call = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(items)
      }, 2000)
    })

    call.then((response) => {
      console.log(itemid)
      console.log(response[itemid - 1])
      setProducto(response[itemid - 1])
    });

    call.catch((error) => {
      setError(true)
      console.log(error)
    })

    call.finally(() => {
      setLoading(false)
    })

  }, [])

  return (
    <div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Hubo un error en el pago"}</div>
      <ItemDetail jsonpack={producto} />
    </div>
  )
}

export default ItemDetailContainer



