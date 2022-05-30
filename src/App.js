//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <NavBar />
        <h2>Bienvenido a la tienda</h2>
        <ItemListContainer greeting={'Aca va mi catalogo!!'} />
      </Router>
    </div>
    </>
  );
}

export default App;

