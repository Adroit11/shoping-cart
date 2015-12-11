import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Home from '../components/home'
import * as AppActions from '../actions/app'

function mapStateToProps(state) {
  const app = state.app;

  return {
    app
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(AppActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
