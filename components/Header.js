import React from 'react'


export default function Header() {
  return (
   <>
   
   <header id="header" className="fixed-top d-flex align-items-center header-scrolled">
    <div className="site-logo-image"><a href="/Homepage" title="Trade tools"><img src="assets/Images/tt-logo.PNG" alt="Trade tools" title="Green-and-Black-Shopping-Cart-Logo-200-×-65px-3-1" width="200px" height="50px" tf-not-load="1" importance="high"/></a></div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto" href="/Products"><b>Products</b></a></li>
          <li><a className="nav-link scrollto" href="/Services"><b>Services</b></a></li>
          <li><a className="nav-link scrollto" href="/AboutUs"><b>About Us</b></a></li>
          <li><a className="nav-link scrollto" href="/Contact"><b>Contact</b></a></li>
          <li className="dropdown"><a href="/account"><span><b>Account</b></span> <i className="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="/">Orders</a></li>
              <li><a href="/">Notifications</a></li>
              <li><a href="/">Settings</a></li>
            </ul>
          </li>
          <li><a href="/"><i className="fa-solid fa-hand-holding-heart"></i> </a></li>
          <li><a href="/"><i className="fa-solid fa-cart-shopping"></i></a></li>
          <li className="dropdown"><a href="/"><i className="fa-solid fa-user-tie"></i></a>
          <ul>
            <li><a href="/">Welcome</a></li>
          </ul>
        </li>
          <li><a className="getstarted scrollto" href="/Login" > Log In</a></li>
          <li><a className="getstarted scrollto" href="/Register" > Register</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
  </header>
   
   </>
  )
}
