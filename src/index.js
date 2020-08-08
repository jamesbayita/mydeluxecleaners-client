import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './components/helpers/scrollToTop';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
