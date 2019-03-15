import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada />
        <Guitarras />
        <Footer />
      </section>
    );
  }
}

export default Invie;
