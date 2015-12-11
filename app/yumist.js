import 'babel-polyfill';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/app'
import history from './utils/history'
import configureStore from './store/configureStore'
import { getAllProducts } from './actions/app'

import Router from 'react-router';
import routes from './routes';

const store = configureStore()

store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('yumist')
)
