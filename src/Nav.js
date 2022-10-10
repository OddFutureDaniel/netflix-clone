import React, { useEffect, useState } from "react";
import "./Nav.css";
import Hamburger from "./Hamburger";


function Nav() {
  const [show, handleShow] = useState(false);
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
    // if(window.screen.width > 600) {
    //     setHamburgerOpen(!hamburgerOpen);
    // }
  };

  function scrollFunc() {
    if (window.scrollY > 40) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
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
        <ul>
          <button className="nav__Button">Home</button>
          <button className="nav__Button">Series</button>
          <button className="nav__Button">Films</button>
          <button className="nav__Button">New & Popular</button>
          <button className="nav__Button">My List</button>
          <button className="nav__Button">Browse by Languages</button>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleHamburger} >
        <Hamburger onClick={toggleHamburger} />
      </div>
      <style jsx = "true">
        {`
        @media (max-width: 600px){
            .nav__Options ul {
            display: ${hamburgerOpen ? "inline" : "none"};
            height: 220px;
            background-color:rgba(0,0,0,0.3);
            backdrop-filter:blur(10px);
            width: 185px;
            position: absolute;
            margin-top:30px;
            padding-top:10px;
            padding-inline-start:0;
            border-radius:5px
            
          }

          .nav__Options ul button {
            display:flex;
            flex-direction: column;
            margin: 15px;
          }
        }
        `}
      </style>
      <img
        className="profile__Logo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png"
        alt="Profile Logo"
      />
    </div>
  );
}

export default Nav;
