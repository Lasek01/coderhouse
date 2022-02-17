import logo from './logo.svg';
import './App.css';
import Footer from './components/footer.js';

function App() {

  const mensajeBienvenida = 'Bienvenidos a React!!!';

  const alertMsg = () => {alert('Hiciste click ndea')};

  return (
    <div className="App">
      <h1>{mensajeBienvenida}</h1>
      <ul>
        <li> React </li>
        <li> JSX </li>
        <li> Webpack </li>
      </ul>
      <Footer name='Jorge' action={alertMsg}>
        <h3>este es mi children</h3>
        <h4>puedo pasarle más de un child</h4>
      </Footer>
    </div>
  );
}

export default App;
