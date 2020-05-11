import { ADD_COUNTER, MIN_COUNTER } from 'store/action/counter/actionTypes'

export default function (state = 1, action) {
  let newState = state
  switch (action.type) {
    case ADD_COUNTER:
      newState = state + 1
      return newState
    case MIN_COUNTER:
      newState = state - 1
      return newState
    default:
      return newState
  }
}
