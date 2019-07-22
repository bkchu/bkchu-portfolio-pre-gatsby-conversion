import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-85177244-2');
ReactGA.pageview(window.location.pathname + window.location.search);

if (window.location.href === 'https://bkchu.github.io/') {
  window.location.assign('https://www.bkchu.dev');
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
