import React, { Component } from 'react';
import acustica from '../media/invie-acustica.png';
import classic from '../media/invie-classic.png';

class Guitarras extends Component {
  render() {
    const guitarras = [
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
    ]
    return(
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        {
          guitarras.map( (guitarra, index) => {
            return(
              <article className="guitarra" key={index}>
                <img className="derecha" src={guitarra.image}  alt={guitarra.alt} width="350"/>
                <div className="contenedor-guitarra-a">
                  <h3 className="title-b">{guitarra.name}</h3>
                  <ol>
                    {
                      guitarra.features.map((feature, index) => {
                        return(
                          <li key={index}>{feature}</li>
                        )
                      })
                    }
                  </ol>
                </div>
              </article>
            )
          })
        }
    </section>
    )
  }
}

export default Guitarras;

{/* <article className="guitarra b">
  <img className="izquierda" src={classic} alt="Guitarra Invie Classic" width="350"/>
  <div className="contenedor-guitarra-b">
    <h3 className="title-b">Invie Classic</h3>
    <ol>
      <li>Estilo vintage</li>
      <li>Liviana</li>
      <li>Inicia tu camino como Rockstar</li>
    </ol>
  </div>
</article> */}
