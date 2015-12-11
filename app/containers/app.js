import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Application from '../components/application'
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

export default connect(mapStateToProps, mapDispatchToProps)(Application)

// use to connect any container with global data
// // Which props do we want to inject, given the global state?
// // Note: use https://github.com/faassen/reselect for better performance.
// function select(state) {
//   return {
//     visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//     visibilityFilter: state.visibilityFilter
//   }
// }
//
// // Wrap the component to inject dispatch and state into it
// export default connect(select)(Application)
