import logo from './logo.svg';
import nani from './nani.jpg';
import nani2 from './nani22.png';
import './App.css';
import React from 'react';

function App() {
  const [lightMode, setLightMode ] = React.useState(false)

  return (
    <div className="App">
      <header className="App-header">
      <p className="header-text-big">
          VERKOZEN TOT 
          <br></br>
          "BESTE MENS VAN HET JAAR":
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <img
            className="image-container"
            onClick={() => setLightMode(prevMode => !prevMode)}
            src={lightMode ? nani : nani2}
            alt="lightning-bolt"
            height="30px"
          />
        <p className="header-text">
          Can you feel the world spinning?
        <br></br>
          <p className = "header-text-small">Made possible by Nani Inc.</p>
        </p>
      </header>
    </div>
  );
}

export default App;
