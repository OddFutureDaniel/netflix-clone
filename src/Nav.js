import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  function scrollFunc() {
    if (window.scrollY > 40) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll",scrollFunc);
    return () => {
      window.removeEventListener("scroll",scrollFunc);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__Black"}`}>
      <img
        className="nav__Logo"
        src="https://images.ctfassets.net/4cd45et68cgf/7LrExJ6PAj6MSIPkDyCO86/542b1dfabbf3959908f69be546879952/Netflix-Brand-Logo.png?w=684&h=456"
        alt="Netflix Logo"
      />
      <div className="nav__Options">
        <button className="nav__Button">Home</button>
        <button className="nav__Button">Series</button>
        <button className="nav__Button">Films</button>
        <button className="nav__Button">New & Popular</button>
        <button className="nav__Button">My List</button>
        <button className="nav__Button">Browse by Languages</button>
      </div>
      <img
        className="profile__Logo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
        alt="Profile Logo"
      />
    </div>
  );
}

export default Nav;
