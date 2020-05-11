import React from 'react'
import './index.css'

function Desc(props) {
  const { title, child } = props
  return (
    <div className="desc">
      <div className="title">{title}</div>
      {child}
    </div>
  )
}

export default Desc
