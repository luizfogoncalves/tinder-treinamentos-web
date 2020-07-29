import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import './index.css';
import Home from './pages/Home';
import history from './services/history'

import { Provider } from 'react-redux'

import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
