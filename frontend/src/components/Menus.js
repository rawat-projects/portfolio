import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import customStyle from "../user.module.css";
import "../App.css";
// import {home} from '/assets/images/home.svg'

const Menus = ({ menuShow, menuClose }) => {
  const [pathname, setPathname] = useState("/");
  const location = useLocation();

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div className={`${customStyle.menus} ${menuShow ? customStyle.show : ""}`}>
      <span class={customStyle.closeBtn} onClick={menuClose}>
        &times;
      </span>
      <ul>
        <li>
          <div className={customStyle.item}>
            <NavLink
              to="/"
              exact
              activeStyle={{ borderColor: "#FFCF54", color: "#FFCF54" }}
              onClick={menuClose}
            >
              <span
                className={`${customStyle.icon} ${customStyle.home_icon}`}
                style={
                  pathname === "/"
                    ? {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/home_active.svg')`,
                      }
                    : {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/home.svg')`,
                      }
                }
              ></span>
              Home
            </NavLink>
          </div>
        </li>

        <li>
          <div className={customStyle.item}>
            <NavLink
              to="/about"
              activeStyle={{ borderColor: "#FFCF54", color: "#FFCF54" }}
              onClick={menuClose}
            >
              <span
                className={`${customStyle.icon} ${customStyle.home_icon}`}
                style={
                  pathname === "/about"
                    ? {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/about_active.svg')`,
                      }
                    : {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/about.svg')`,
                      }
                }
              ></span>
              About Me
            </NavLink>
          </div>
        </li>

        <li>
          <div className={customStyle.item}>
            <NavLink
              to="/projects"
              activeStyle={{ borderColor: "#FFCF54", color: "#FFCF54" }}
              onClick={menuClose}
            >
              <span
                className={`${customStyle.icon} ${customStyle.home_icon}`}
                style={
                  pathname === "/projects"
                    ? {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/projects_active.svg')`,
                      }
                    : {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/projects.svg')`,
                      }
                }
              ></span>
              Projects
            </NavLink>
          </div>
        </li>

        <li>
          <div className={customStyle.item}>
            <NavLink
              to="/resume"
              activeStyle={{ borderColor: "#FFCF54", color: "#FFCF54" }}
              onClick={menuClose}
            >
              <span
                className={`${customStyle.icon} ${customStyle.home_icon}`}
                style={
                  pathname === "/resume"
                    ? {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/resume_active.svg')`,
                      }
                    : {
                        backgroundImage: `url('${process.env.PUBLIC_URL}/assets/images/resume.svg')`,
                      }
                }
              ></span>
              Resume
            </NavLink>
          </div>
        </li>

        {/* <li>
          <div className={customStyle.item}>
            <NavLink to="/login">Login</NavLink>
          </div>
        </li>

        <li>
          <div className={customStyle.item}>
            <NavLink to="/signup">Signup</NavLink>
          </div>
        </li>

        <li>
          <div className={customStyle.item}>
            <NavLink to="/about">About</NavLink>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Menus;
