import React from 'react'
import './navBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
 return (
  <nav>
    <ul>
        <li><Link to="/">RedPatch</Link></li>
        <li><Link to="search">Search</Link></li>
        <li><Link to="about">About</Link></li>
    </ul>
  </nav>
 )
}

export default NavBar;