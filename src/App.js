// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';
import { CartContextProvider } from './context/CartContext'

function App() {

  // const greeting = 'Hola! Bienvenido a mi React E-Commerce!';

  return (
    <CartContextProvider>
      <div className="App">
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          </Routes>
        </Router>
      </div>
    </CartContextProvider>
  );
}

export default App;
