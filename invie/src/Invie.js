import React, { Component } from 'react';
//CSS
import './css/invie.css';
//Components
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';
//Media
import logoInvie from './media/invie.png';
import acustica from './media/invie-acustica.png';
import classic from './media/invie-classic.png';
//Dependencies
import cheet from 'cheet.js';

cheet('i n v i e', () =>{
  console.log('EXITO!!')
})
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
  ],
  logoInvie: logoInvie,
  //Guitarras
  guitarras: [
    {
      image: acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ],
    },
    {
      image: classic,
      alt: 'Guitarra Invie Classic',
      name: 'Invie Classic',
      features: [
        'Estilo Classic',
        'Liviana',
        'Vive como un RockStar',
      ],
    },
  ],
}

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        <Portada menu={data.menu} logo={data.logoInvie}/>
        <Guitarras guitarras={data.guitarras}/>
        <Footer />
      </section>
    );
  }
}

export default Invie;
