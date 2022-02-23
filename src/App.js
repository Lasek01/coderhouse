// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';

function App() {

  // const greeting = 'Hola! Bienvenido a mi React E-Commerce!';

  return (
    <div className="App">
      
      <NavBar />

      <ItemListContainer/>
      
    </div>
  );
}

export default App;
