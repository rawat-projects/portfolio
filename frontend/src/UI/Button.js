import React from "react";
import style from "../user.module.css";

const Button = (props) => {
  return (
    <a
      href="javascript:void();"
      className={`${style.btn} ${props.classname}`}
      onClick={props.click}
    >
      {props.title}
    </a>
  );
};

export default Button;
