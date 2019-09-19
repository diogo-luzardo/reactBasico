import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Diogo from './Diogo'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      name:"Arthur"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
  }

  changeState() {
    this.setState({
      name: "Diogo Faria"
    })
  }

  resetState() {
    this.setState({
      name: "Arthur"
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Meu projeto em React
          </p>
            <Diogo />
          <div>
            {this.state.name}
          </div>
          <div>
            <button onClick={this.changeState}>Mudar nome</button>
            <button onClick={this.resetState}>Resetar o nome</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
