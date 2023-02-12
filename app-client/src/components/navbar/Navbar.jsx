import React from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbarContainer">
                <div className="logo">
                    <h2>A-BOOKING</h2>
                </div>
                <ul>
                  <li><a to='' className='iconI'><i className="fas fa-right-to-bracket"></i>Register</a></li>
                  <li><a to='' className='iconI'><i className="fas fa-user"></i> Login</a></li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar