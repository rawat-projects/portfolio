import React from "react";
import { Link } from "react-router-dom";

// import css
import style from "../user.module.css";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.hamburger}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={style.page_title}>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <h4>Home</h4>
      </div>

      <div className={style.contact_info}>
        <p className={style.mobile_no}>+91-9811719984</p>
      </div>
    </div>
  );
};

export default Sidebar;
