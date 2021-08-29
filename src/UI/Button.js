import React from "react";

const Button = (props) => {
  return (
    <a
      href="javascript:void();"
      className="btn "
      onClick={props.click}
      className={props.classname}
    >
      {props.title}
    </a>
  );
};

export default Button;
