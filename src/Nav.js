import React, { useState, useEffect } from "react";
import NetflixLogo from './assets/netflixlogo.png'
import AvatarImg from './assets/avataricon.png'

import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src={NetflixLogo}
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src={AvatarImg}
        alt="Avatar"
      />
    </nav>
  );
}

export default Nav;
