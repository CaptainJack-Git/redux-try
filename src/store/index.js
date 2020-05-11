import { createStore, combineReducers } from 'redux'
import counter from './reducers/counter'

export default createStore(
  combineReducers({ counter }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
