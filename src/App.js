
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [showImage, setShowImage] = useState(true);

  const toggle = () => {
    setShowImage(!showImage);
  }

  return (
    <div>

  
    <h1>RENAN AVNER COSTA</h1>
    <div className="App">
      <header className="App-header">
        <button type="button" onClick={toggle}>
          {showImage ? 'Esconder' : 'Mostrar'}
        </button>
        {showImage && (
          <img src={logo} className="App-logo" alt="logo" />
        )}
        <p>
          Esconda ou mostre o icone do react ao clicar no botão
        </p>
       
      </header>
      </div>
    </div>
  );
}

export default App;
