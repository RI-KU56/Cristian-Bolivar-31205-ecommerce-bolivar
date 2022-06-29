import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContext from './components/CartContext';


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
            {/*Todos los productos de una categoria puntual segun el id proporcionado*/}
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            {/*Un producto puntual seg{un el id} */}
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </div>
    </>
  );
}

export default App;