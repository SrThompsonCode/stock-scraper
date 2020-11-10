import React from "react";
import logo from "../images/SrThompson.jpg";

import "./styles/Navbar.css";
function NavBar(props) {
  return (
    <React.Fragment>
      <nav className='navbar_background navbar-dark  navbar '>
        <span className='navbar_name anim_typewriter'>
          C:\Windows\User\SrThompson
        </span>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
