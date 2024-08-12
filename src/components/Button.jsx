import React from "react";
import Link from "./Link";

function Button(props) {
  return (
    <div className="btn-box">
      {props.items.map((item) => {
        return <Link key={item.id} text={item.text} link={item.link} />;
      })}
      {/* <a href="">My Work</a>
      <a href="mailto:godwinolekanma12@gmail.com">Contact Me</a> */}
    </div>
  );
}

export default Button;
