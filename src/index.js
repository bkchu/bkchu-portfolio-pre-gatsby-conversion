import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

if (window.location.href === 'https://bkchu.github.io/confession-app') {
  window.location.assign('https://bkchu.github.io/confession-app/');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
