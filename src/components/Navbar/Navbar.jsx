import React from 'react'
import '../../css/styles.css'
import NavComponent from './components/NavComponent'

function Navbar(props) {
  return (
    <div id="content">
        <nav className="navbar navbar-expand-lg navbar-light m-0 p-0">
            <div className="container-fluid d-flex flex-direction-row">
            <p>PillPLUS</p>
            <div className="d-flex align-items-center">
            <NavComponent name="Home" icon={"ri-home-2-line"}/>
             <NavComponent name="Home"/>
             <NavComponent name="Home"/>
             <NavComponent name="Home"/>
             <NavComponent name="Home"/>
             <NavComponent name="Home"/>
             <NavComponent name="Home"/>
             <NavComponent name="Home"/>
            </div>
             <div>

             </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;