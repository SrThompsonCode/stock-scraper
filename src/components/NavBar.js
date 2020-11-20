import React from "react";
import logo from "../images/SrThompson.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons/faVolumeMute";

// import "../FontAwesome";
import "./styles/Navbar.css";

function NavBar(props) {
  return (
    <React.Fragment>
      <nav className='navbar_background navbar-dark  navbar '>
        <span className='navbar_name anim_typewriter'>
          C:\Windows\User\SrThompson
        </span>
        <div className='nav-icons'>
          <a href='https://github.com/SrThompsonCode' target='_blank'>
            <FontAwesomeIcon
              className='mr-2 a-trasnparent contact-icon'
              icon={["fab", "github"]}
              size='2x'
            />
          </a>
          <a href='https://discordapp.com/users/356631607639146508'>
            <FontAwesomeIcon
              className='mr-2 a-trasnparent contact-icon'
              icon={["fab", "discord"]}
              size='2x'
            />
          </a>

          {/* <FontAwesomeIcon icon={["fab", "discord"]} size='2x' /> */}
        </div>
      </nav>
    </React.Fragment>
  );
}

export default NavBar;
