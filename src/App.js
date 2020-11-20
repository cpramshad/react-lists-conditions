
import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Characters from './Characters/Characters'

class App extends Component {
  state = {
    charString: ''
  };

  setCharLengthHandler = (event) => {
    this.setState({
      charString: event.target.value
    })
  };

  deleteCharacterHandler = (event, charIndex) => {
    let charString = this.state.charString.split('');
    charString.splice(charIndex, 1);

    this.setState({
      charString: charString.join('')
    })


  };

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.setCharLengthHandler} value={this.state.charString}></input>
        <p>Length is: { this.state.charString.length }</p>
        <Validation length={this.state.charString.length}></Validation>
        {this.state.charString.split('').map( (char, index) => {
          return <Characters click={ (event) => {this.deleteCharacterHandler(event, index) } } char={char} key={index}/>
        })}
      </div>
    )
  };
}

export default App;
