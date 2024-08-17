import React, { useState } from "react";
import NavItems from "./NavItems";
import SideBar from "./SideBar";
import StairTransition from "../components/StairTransition"
import PageTransition from "../components/PageTransition";

function Header(props) {
  var [open, setOpen] = useState(false);

  window.onscroll = function () {
    checkScroll();
  };

  function checkScroll() {
    if (window.pageYOffset > 50) {
      document.getElementsByTagName("header")[0].classList.add("h");
    } else {
      document.getElementsByTagName("header")[0].classList.remove("h");
    }
  }
  function handleOpen() {
    setOpen(!open);
  }

  return (
    <header>
      <PageTransition/>
      <StairTransition />
      <nav className="nav-bar container">
        <a href="/" id="logo">
          Godwin.
        </a>
        <NavItems />
        <svg
          onClick={handleOpen}
          className="open-side"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#FFF"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
        <SideBar toggle={open} close={handleOpen} />
      </nav>
    </header>
  );
}

export default Header;
