import { combineReducers } from 'redux'
import { default as app, getProduct, getAddedIds } from './app'


export function getCartProducts(state) {
  return getAddedIds(state.app).map(id => ({
    ...getProduct(state.app, id)
  }))
}


export default combineReducers({
  app
	// more reducers go here...
})
