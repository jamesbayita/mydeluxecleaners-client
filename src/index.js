import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import {BrowserRouter as Router} from 'react-router-dom';
import ScrollToTop from './components/helpers/scrollToTop';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-177778106-1');
ReactGA.pageview(window.location.pathname + window.location.search);

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
