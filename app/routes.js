import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/app'
import Cart from './containers/cart'
import Home from './containers/home'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="cart" component={Cart}/>
  </Route>
)
