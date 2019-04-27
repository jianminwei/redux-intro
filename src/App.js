import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 5
    };
  }

  onButtonClick = e => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="redux-self-app">
        <header className="header">
          <h2>Redux-self</h2>
        </header>
        <div>
          Counter: <span id="counter">{this.state.counter}</span>
        </div>
        
        <button onClick={this.onButtonClick}>Increase Counter</button>
      </div>
    );
  }
}

export default App;
