import React from 'react'
import './style.css'
function Navbar(props) {
  return (
    <div className="wrapper">
      <div className="image--cover">
      <i className={props.icon}></i>
      </div>
    <p>{props.name}</p>
  </div>
  )
}

export default Navbar;