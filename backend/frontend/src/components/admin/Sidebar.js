import React from "react";
import style from "../../admin.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <ul>
        <li>
          <Link to="/admin/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
