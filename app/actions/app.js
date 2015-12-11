import { checkHttpStatus, parseJSON } from '../utils';
import history from '../utils/history';

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

export function checkout(order) {
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
export function loginUser(user, redirect="/") {
    return function(dispatch) {
        return fetch('http://localhost:1337/login/', {
              method: 'post',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(user)
            })
            .then(checkHttpStatus)
            .then(parseJSON)
            .then(response => {
                // dispatch user login success status to reducer
                dispatch(loginUserSuccess(response))
                history.replaceState(null, '/')
            })
            .catch(error => {
                dispatch(loginUserFailure(error));
            })
    }
}
