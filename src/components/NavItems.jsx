import React from "react";
import { NavLink } from "react-router-dom";

function NavItems(props) {
  return (
    <ul className="nav-Items" id={props.id}>
      <li>
        {/* <a href="/home">Home</a> */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "null")}
        >
          Home
        </NavLink>
      </li>
      <li>
        {/* <a href="/about">About</a> */}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "null")}
        >
          About
        </NavLink>
      </li>
      <li>
        {/* <a href="/project">Project</a> */}
        <NavLink
          to="/project"
          className={({ isActive }) => (isActive ? "active" : "null")}
        >
          Project
        </NavLink>
      </li>
      <li>
        {/* <a href="/resume">Resume</a> */}
        <NavLink
          to="/resume"
          className={({ isActive }) => (isActive ? "active" : "null")}
        >
          Resume
        </NavLink>
      </li>
    </ul>
  );
}

export default NavItems;
