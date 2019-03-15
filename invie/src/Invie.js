import React, { Component } from 'react';
import logo from './logo.svg';
import './css/invie.css';
import Portada from './components/Portada';

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada />
      </section>
    );
  }
}

export default Invie;
