import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

const menu = [
  {
    href: 'index.html',
    title: 'Home',
  },
  {
    href: '#guitarras',
    title: 'Guitarras',
  },
  {
    href: 'precios.html',
    title: 'Precios',
  },
  {
    href: 'hola.html',
    title: "Don't click me",
  },
]

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada menu={menu}/>
        <Guitarras />
        <Footer />
      </section>
    );
  }
}

export default Invie;
