import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// == Local imports
// styles
import './styles/index.scss';
import './styles/reset.scss';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
