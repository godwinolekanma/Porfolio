import React, { useRef } from "react";
import NavItems from "./NavItems";
import { CSSTransition } from "react-transition-group";

function SideBar(props) {
  const nodeRef = useRef(null);
  return (
    <CSSTransition
      in={props.toggle}
      nodeRef={nodeRef}
      timeout={500}
      classNames="side-bar"
      unmountOnExit
    >
      <div ref={nodeRef} className="nav-bar side-bar">
        <svg
          onClick={props.close}
          className="close-side"
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#fff"
        >
          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
        </svg>
        <NavItems id="side-items" />
      </div>
    </CSSTransition>
  );
}

export default SideBar;
