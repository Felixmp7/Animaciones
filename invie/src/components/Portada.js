import React , { Component } from 'react';
import invie from '../media/invie.png';

class Portada extends Component {
  render(){
    return(
      <section id="portada" className="portada background">
        <header id="header" className="header contenedor">
          <figure className="logotipo">
            <img src={invie} width="186" height="60" alt="Invie logotipo"/>
          </figure>
          <span className="burguer-button icon-menu" id="burguer-button"></span>
          <nav className="menu" id="menu">
            <ul>
              {this.props.menu.map((item) => {
                return(
                  <li>
                    <a href={item.href}>{item.title}</a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>
        <div className="contenedor">
          <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
          <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
          <a className="button" href="#guitarras">Conoce mas</a>
        </div>
    </section>
    )
  }
}

export default Portada;
