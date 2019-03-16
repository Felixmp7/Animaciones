import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSTG from 'react-addons-css-transition-group';

function mapStateToProps(state){
  return{
    guitarras: state.guitarras,
  }
}

class Guitarras extends Component {
  render() {
    return(
      <section id="guitarras" className="guitarras contenedor">
        <h2>Nuestra guitarras</h2>
        {
          this.props.guitarras.map( (guitarra, index) => {
            return(
              <article className="guitarra" key={index}>
              <CSSTG
                transitionName="flicker"
                transitionEnterTimeout={500}
                transitionEnterTimeout={500}
              >
                <img className="guitarra-image"
                key={guitarra.image}
                src={guitarra.image}
                alt={guitarra.alt}
                width="350"
                />
              </CSSTG>
                <div className="contenedor-guitarra">
                  <h3 className="guitarra-name">{guitarra.name}</h3>
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

export default connect(mapStateToProps)(Guitarras);
