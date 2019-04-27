import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    //give the initial counter 0
    this.props = {counter: 0};
  }

  onButtonClick = e => {
    //this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <div className="redux-self-app">
        <header className="header">
          <h2>Redux-self</h2>
        </header>
        <div>
          Counter: <span id="counter">{this.props.counter}</span>
        </div>
        
        <button onClick={this.onButtonClick}>Increase Counter</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
