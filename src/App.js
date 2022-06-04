import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {

  const onAdd = (count) => {
    alert(`Agregaste ${count} productos`)
  }

  return (
    <>
    <div className="App">
      <Router>
        <NavBar />
        <h2>Bienvenido a la tienda</h2>
        <ItemListContainer greeting={'Aca va mi catalogo!!'} />
        <ItemCount inicial={1} stock={10} onAdd={onAdd} />
      </Router>
    </div>
    </>
  );
}

export default App;

