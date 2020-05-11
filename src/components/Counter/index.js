import React from 'react'
import { connect } from 'react-redux'
import { addCounter, minCounter } from 'store/action/counter/actionCreators'

function Counter(props) {
  const { counter, doAddCounter, doMinCounter } = props
  return (
    <span className="counter-box">
      <strong>计数器:{counter}</strong>
      <button onClick={doAddCounter}>+</button>
      <button onClick={doMinCounter}>-</button>
    </span>
  )
}

const mapStateToProps = state => ({
  counter: state.counter
})

const mapDispatchToProps = dispatch => ({
  doAddCounter: () => dispatch(addCounter()),
  doMinCounter: () => dispatch(minCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
