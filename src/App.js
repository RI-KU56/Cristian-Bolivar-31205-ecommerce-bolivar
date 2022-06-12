import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <>
    <div className="App">
      <Router>
        <NavBar />
        <h2>Bienvenido a la tienda</h2>
        <ItemDetailContainer />
        <ItemListContainer />
      </Router>
    </div>
    </>
  );
}

export default App;

