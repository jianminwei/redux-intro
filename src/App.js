import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import {increaseCounter} from './actions';

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
      //2. call the action creator to dispatch an action.
      this.props.dispatch(increaseCounter())   
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
