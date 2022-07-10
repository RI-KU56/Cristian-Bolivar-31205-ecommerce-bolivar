import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useContext, useState } from 'react';
import { MiContexto } from './CartContext';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';


export default function Checkout() {

    const {cart,PrecioTotalProductos,clearCart} = useContext(MiContexto);

    const[nombre,setNombre] = useState();
    const[correo,setCorreo] = useState();
    const[celular,setCelular] = useState();

    const db = getFirestore();
    const orderColeccion = collection (db,'pedidos');

    const [idCompras,setIdCompras] = useState('');
    const [compraRealizada,setCompraRealizada] = useState(false);

    function manejarClick() {
        const factura = {
            comprador: {correo, nombre ,celular},
            productos : cart,
            precioTotalFinal : PrecioTotalProductos(),
            fecha: new Date()
        }
        console.log(factura);

        addDoc(orderColeccion,factura)
        .then(({id})=>{
            setIdCompras(id);
            setCompraRealizada(true);
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    if (cart.length === 0){
        return (
            <>
            <h1>Tu carrito está vacío</h1>
            <Link to= '/'><Button>volver a los productos</Button></Link>
            </>
        )
    }

    return (
        <>
            <h1>Complete sus datos para terminar la compra</h1>
            <div className="mb-3">
                <label for="full_name_id" class="control-label">Nombre</label>
                <input onChange={(e)=> setNombre(e.target.value)} type="text" className="form-control" placeholder="Ingrese su nombre" required></input>
            </div> 
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input onChange={(e)=> setCorreo(e.target.value)} type="email" className="form-control" placeholder="Ingrese su correo electronico @dominio.com" required></input>
            </div>
            <div className="mb-3">
                <label for="full_number_id" class="control-tel">Telefono</label>
                <input onChange={(e)=> setCelular(e.target.value)} type="number" className="form-control" placeholder="Ingrese telefono 555 555555" required></input>
            </div>
            
            <button className="btn btn-primary"  onClick={()=>manejarClick()}>Terminar Compra</button>


        {
            compraRealizada &&
                                <>
                                    <div>
                                        <h1>Tu compra fue realizada con exito</h1>
                                        <p>El comprobante de tu compra es : {idCompras}</p>
                                        <Link to = '/inicio'>
                                            <button type="button" class="btn btn-success btn-lg" onClick={()=> clearCart()}>Volver a inicio</button>
                                        </Link>
                                    </div>
                                </>
        }

        </>
    )
}