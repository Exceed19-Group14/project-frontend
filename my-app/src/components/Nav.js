import React from 'react'
import '../styles/Nav.css'
import { Link } from 'react-router-dom'
import FontLink from './FontLink'
import Button from './Button'

function Nav() {
    return (
      <div className="navbar">
        <Link to="/">
        <img
        src="https://cdn-icons-png.flaticon.com/512/2303/2303716.png"
        alt="home"
        />
        </Link>
        <div className='aqua'>AQUABOT</div>
        <Button />
      </div>
    )
  }
  
  export default Nav