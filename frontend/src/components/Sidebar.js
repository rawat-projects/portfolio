import React from "react";
import { useSelector } from "react-redux";

// import css
import style from "../user.module.css";

const Sidebar = ({ menus, ismenushow }) => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className={style.sidebar}>
      <div
        className={`${style.hamburger} ${ismenushow ? "active" : ""}`}
        onClick={menus}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={style.page_title}>
        <h4>Home</h4>
      </div>

      <div className={style.contact_info}>
        <p className={style.mobile_no}>{user.phone}</p>
      </div>
    </div>
  );
};

export default Sidebar;
