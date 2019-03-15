import React, { Component } from 'react';
import logo from './logo.svg';
import logoPlatzi from './platzi.png';
import './App.css';
import CSSTransitionsGroup from 'react-addons-css-transition-group';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CSSTransitionsGroup
            transitionName="fade"
            >
            <img src={logo} className="App-logo" alt="logo" />
          </CSSTransitionsGroup>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
