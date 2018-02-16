import ReactDOM from 'react-dom';
import React from 'react';

import Router from './router';

import './manifest.json';
import './icons/192.png';
import './icons/512.png';

const ClientApp = () => <Router />;

ReactDOM.render(<ClientApp />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('sw.js')
    .then(() => {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('root').style.display = 'block';
      console.log(new Date());
    })
    .catch(err => {
      console.log(err);
    });
}
