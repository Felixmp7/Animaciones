import React, { Component } from 'react';
import './css/invie.css';
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

import logoInvie from './media/invie.png';

const data = {
  menu: [
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
    // {
    //   href: 'hola.html',
    //   title: "Don't click me",
    // },
  ],
  logoInvie: logoInvie,
}

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada menu={data.menu} logo={data.logoInvie}/>
        <Guitarras />
        <Footer />
      </section>
    );
  }
}

export default Invie;
