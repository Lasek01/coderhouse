// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer.js';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './container/ItemDetailContainer';

function App() {

  // const greeting = 'Hola! Bienvenido a mi React E-Commerce!';

  return (
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
  );
}

export default App;
