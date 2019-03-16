import React, { Component } from 'react';
//Components
import Portada from './components/Portada';
import Guitarras from './components/Guitarras';
import Footer from './components/Footer';

class Invie extends Component {
  render() {
    return (
      <section className="Invie">
        {/* <Portada menu={data.menu} logo={data.logoInvie}/> */}
        <Portada />
        {/* <Guitarras guitarras={data.guitarras}/> */}
        <Guitarras />
        <Footer />
      </section>
    );
  }
}

export default Invie;
