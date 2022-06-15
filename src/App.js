import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
    <div className="App">
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
        </Switch>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;

