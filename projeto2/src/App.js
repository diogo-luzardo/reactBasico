import React from 'react';
import logo from './logo.svg';
import './App.css';
import Diogo from './Diogo'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Meu projeto em React
        </p>
      <Diogo></Diogo>
      </header>
      
    </div>
  );
}

export default App;
