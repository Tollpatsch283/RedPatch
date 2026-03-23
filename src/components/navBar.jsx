import React from 'react'
import { Link } from 'react-router-dom';
const NavBar = () => {
 return (
  <nav>
    <ul>
        <li>RedPatch</li>
        <li>Search</li>
        <li><Link to="about">About</Link></li>
    </ul>
  </nav>
 )
}

export default NavBar;