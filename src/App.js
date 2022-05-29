//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <NavBar />
      </Router>
      <h2>Bienvenido a la tienda</h2>
    </div>
    </>
  );
}

export default App;
