import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Cart from '../components/cart'
import * as AppActions from '../actions/app'
import { getCartProducts } from '../reducers'

function mapStateToProps(state) {
  const app = state.app;

  return {
    app,
    cartItems: getCartProducts(state)
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
