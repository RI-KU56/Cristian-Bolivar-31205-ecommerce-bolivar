import React,{useState} from "react";
import ItemCount from "./ItemCount";


function CountContainer({ initial, stock, product_name }) {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    count < stock ? setCount(count + 1) : alert('No se pueden agregar mas productos, sin stock!!')
  }

  const restar = () => {
    count > initial ? setCount(count - 1) : alert('No se pueden quitar mas productos!!')
  }
  
  const reset = () => {
    setCount(initial)
  }

  return (
    <>
      <ItemCount
        min={restar}
        max={sumar}
        reset={reset}
        count={count}
        product_name={product_name}
      />
    </>
  );
}

export default CountContainer
