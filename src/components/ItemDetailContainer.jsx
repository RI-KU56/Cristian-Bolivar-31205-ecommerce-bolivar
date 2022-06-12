
import React, {useState,useEffect} from 'react';
import ItemDetail from './ItemDetail';


function ItemDetailContainer() {
  const [productos, setProductos] = useState();
  useEffect(() => {
    setTimeout(() => {
      fetch("https://api.mercadolibre.com/sites/MCO/search?q=aorus&limit=1#json")
        .then((response) => response.json())
        .then((data) => setProductos(data.results));
    }, 2000);
  }, []);

  return (
    <div>
      {productos && productos.map((item) => 
      <ItemDetail key={item.id} jsonpack={item} />)}
    </div>
  );
}

export default ItemDetailContainer



