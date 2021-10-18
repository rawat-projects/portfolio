import React from "react";
import { Link } from "react-router-dom";
import style from "../user.module.css";

const Button = (props) => {
  return (
    <Link to="/about" className={`${style.btn} ${props.classname}`}>
      {props.title}
    </Link>
  );
};

export default Button;
