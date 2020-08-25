import React, { useState, useEffect } from "react";
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
        src="https://lh3.googleusercontent.com/proxy/ssD1j3wapqvofgb9CBYnD-t3yg2XKQuPARX0Jd4UBo_BxAYx-snZP3v8N2HZP5RlZULtJZftogcdmmp-dFkjpemEEsCPnaZCq-KGypXqXzLWEPwHtHo"
        alt="Netflix logo"
      />
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Netflix logo"
      />
    </nav>
  );
}

export default Nav;
