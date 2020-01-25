// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMW from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import { Counter } from './components';
import './style.css';

import { reducer } from './reducers';

function getApp(settings) {
  // add middlware
  var middleware = applyMiddleware(promiseMW, logger, thunk);

  // create store
  var store = createStore(reducer, settings, middleware);

  return <Provider store={store}>
    <Counter />
  </Provider>;
}

export default getApp;
