import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    //give the initial props counter 0
    this.props = {counter: 0};

    //bind the methods as a good practice
    this.onButtonClick.bind(this);
  }

  onButtonClick = e => {
      //1. This dispatch is injected by react-redux connect
      //2. Dispatch a action, and send the payload.
      this.props.dispatch({ 
        type: 'INCREASE_COUNTER',
        payload: {
          counter_increment_unit: 2
        } 
      })   
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

//This mapStateToProps function maps redux "dispatch" function
//in addition to state as properties.
function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(App);
