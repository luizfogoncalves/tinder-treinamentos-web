import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom'
import Routes from './routes'
import './index.css';
import Home from './pages/Home';
import history from './services/history'

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
