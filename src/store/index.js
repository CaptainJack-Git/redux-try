import { createStore, combineReducers } from 'redux'
import base from './reducers/base'

export default createStore(
  combineReducers({ base }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
