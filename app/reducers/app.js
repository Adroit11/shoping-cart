import _ from 'lodash';
import {createReducer} from '../utils';
import {CHECKOUT_DONE, RECEIVE_PRODUCTS, ADD_TO_CART} from '../constants/actionTypes';


// setup some global value
const initialState = {
  addedIds: [],
  productsIds:[],
  products:[
    {
      "id": 1,
      "title": "Order for launch now!",
      "discription":"Afternoon meal",
      "price": 50,
      "url":"https://cdn.lbb.in/delhi/wp-content/uploads/sites/1/2014/08/Yumist.jpg",
      "items": 1
    },
    {
      "id": 2,
      "title": "Order for dinner!",
      "discription":"Roti & Paneer",
      "price": 150,
      "url":"https://cdn.lbb.in/delhi/wp-content/uploads/sites/1/2014/08/Meal_hopper.jpg",
      "items": 1
    }
  ]
}

function removeItems (obj, productId, name, value) {
  return _.each(obj, function(item) {
    if(item['id'] == productId){
      item[name] = item[name] - value;
    }
  });
}


export default createReducer(initialState, {
  [CHECKOUT_DONE]: (state, payload) => {
      return {
          ...state,
          addedIds: []
      };
  },
  [RECEIVE_PRODUCTS]: (state, payload) => {
      return {
          ...state,
          productsIds: state.products.map(product => product.id),
          productById: state.products.reduce((obj, product) => {
            obj[product.id] = product
            return obj
          }, {})
      };
  },
  [ADD_TO_CART]: (state, payload) => {
      const addedIds  = state.addedIds;
      if (addedIds.indexOf(payload.productId) !== -1) {
        return state
      }
      if(payload.productId){
        removeItems(state.products, payload.productId, 'items', 1)
        return {
            ...state,
            addedIds: [ ...addedIds, payload.productId ]
        };
      } else {
        return state;
      }

  }
});

export function getProduct(state, id) {
  return state.productById[id]
}

export function getProductItems(state) {
  return state.productsIds.map(id => getProduct(state, id))
}

export function getAddedIds(state) {
  return state.addedIds
}
