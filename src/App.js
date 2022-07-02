import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContext from './components/CartContext';
import Checkout from './components/Checkout';


function App() {

  return (
    <>
    <div className="App">
      <CartContext>
        <BrowserRouter>
          <NavBar />

          <Routes>
            {/*Todos los productos que se van a mostrar en el inicio */}
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/inicio" element={<ItemListContainer />} />
            {/*Todos los productos de una categoria segun el id proporcionado*/}
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            {/*Un producto segun el id} */}
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            {/* Ruta al carrito de compras */}
            <Route path="/cart" element={<Cart />} />
            {/* Ruta a verificacion de datos para finalizar compra */}
            <Route path="/checkout" element={<Checkout/>} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
    </>
  );
}

export default App;