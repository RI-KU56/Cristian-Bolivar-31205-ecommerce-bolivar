import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import { CartProvider } from './components/CartContext';


function App() {

  return (
    <>
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer name="Escoger Producto a Comprar" />
            </Route>
            <Route path="/categories/:categoryid">
              <ItemListContainer />
            </Route>
            <Route path="/categories">
              <ItemListContainer />
            </Route>
            <Route path="/item/:itemid">
              <ItemDetailContainer />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartProvider>  
    </div>
    </>
  );
}

export default App;

