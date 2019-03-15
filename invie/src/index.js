import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Invie from './Invie';
import * as serviceWorker from './serviceWorker';
//Media
import logoInvie from './media/invie.png';
import acustica from './media/invie-acustica.png';
import classic from './media/invie-classic.png';
//Dependencies
import cheet from 'cheet.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
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

const store = createStore(reducer, initialState);

function reducer(state, action){
  switch (action.type) {
    case 'UPDATE_PROPS':
      const newProps = action.payload.props
      return{...state, ...newProps}
  }
  default: return state;
}

cheet('i n v i e', () =>{
  console.log('Lo lograste!')
})

cheet('b a c k', () =>{
  console.log('Regresaste!')
})

ReactDOM.render(
  <Provider>
    <Invie />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
