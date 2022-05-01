import React from 'react'
import { NavLink } from 'react-router-dom';
import "../App.css";
import logo from '../rose.png'

const Navbar = () => {
  return <header id="header" class="fixed-top d-flex align-items-center">
  <div class="container d-flex align-items-center">
    <div class="logo ">
      <NavLink to ="/">
        <img src={logo} alt="" class="img-fluid" />
      </NavLink>
    </div>

    <nav id="navbar" class="navbar">
      <ul>
        <li>
          <NavLink class="nav-link scrollto active" to ="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink class="nav-link scrollto" to ="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink class="nav-link scrollto" to ="/contact">
            Contact
          </NavLink>
        </li>
    
      <li>
          <NavLink class="nav-link scrollto" to ="/marketplace">
            Marketplace
          </NavLink>
        </li>
        </ul>
      <i class="bi bi-list mobile-nav-toggle"></i>
    </nav>
  </div>
</header>

  
  
}

export default Navbar