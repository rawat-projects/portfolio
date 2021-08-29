import React from "react";

// import css
import "../App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="page_title">
        <h4>Home</h4>
      </div>

      <div className="contact_info">
        <p className="mobile_no">+91-9811719984</p>
      </div>
    </div>
  );
};

export default Sidebar;
