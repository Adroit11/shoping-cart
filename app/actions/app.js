import { checkHttpStatus, parseJSON } from '../utils';
import history from '../utils/history';
import { getCartProducts } from '../reducers'

import {
  RECEIVE_PRODUCTS,
  ADD_TO_CART,
  CHECKOUT_DONE } from '../constants/actionTypes'

function addToCartUnsafe(productId) {
  return {
    type: ADD_TO_CART,
    payload: {
      productId: productId
    }
  }
}

export function getcheckout(order) {
  return {
    type: CHECKOUT_DONE
  }
}
export function addToCart(productId) {
  console.log(productId);
  return (dispatch, getState) => {
    if (getState().app.productById[productId].items > 0) {
      dispatch(addToCartUnsafe(productId))
    }
  }
}

export function getAllProducts() {
  return {
    type: RECEIVE_PRODUCTS
  }
}

// Async method to login user
export function checkout(data, redirect="/") {
    let order = data;
    return function(dispatch, getState) {
        order.items = getCartProducts(getState())

        return fetch('http://localhost:3000/order', {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(order)
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                console.log(response);
                // dispatch user login success status to reducer
                dispatch(getcheckout())
                setTimeout(() => { history.replaceState(null, '/') }, 3000);

            })
            .catch(error => {
            })
    }
}
