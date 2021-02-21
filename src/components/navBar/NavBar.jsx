import React from 'react'
import { Link, NavLink } from 'react-router-dom'

import './NavBar.css';


const NavBar = () => {
    return (
        <div className="nav-bar">

                <div id="link"> <NavLink to="/user-form" > Home | </NavLink> </div>
                <div id="link"> <NavLink to="/submitted-forms" > All Forms </NavLink> </div>

        </div>
    )
}

export default NavBar
