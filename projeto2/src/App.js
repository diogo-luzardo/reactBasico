import React, { Component }from 'react';
import logo from './logo.svg';
import './App.css';
import Diogo from './Diogo'
import List from './List'


class App extends Component {

  constructor(props){
    super (props)
    this.state = {
      name:"Arthur",
      email:"arthurvl@gmail.com"
    }
    this.changeState = this.changeState.bind(this)
    this.resetState = this.resetState.bind(this)
    this.changeInput = this.changeInput.bind(this)
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

  changeInput(event) {
    let target = event.target
    let index = target.name
    this.setState({
      [index]:target.value
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
            <form>
              <label>Nome:
                <input type="text" name="name" value={this.state.name} onChange={this.changeInput}></input>
              </label>
            </form>
            <form>
              <label>Email:
                <input type="email" name="email" value={this.state.email} onChange={this.changeInput}></input>
              </label>
            </form>
            {this.state.name} - {this.state.email}
          </div>
          <div>
            <button onClick={this.changeState}>Mudar nome</button>
            <button onClick={this.resetState}>Resetar o nome</button>
            <List />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
