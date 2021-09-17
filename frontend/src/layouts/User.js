import React from "react";
import Sidebar from "../components/Sidebar";
import { Route, Link, Switch } from "react-router-dom";

import Home from "../pages/User/Home";

import style from "../user.module.css";

const User = () => {
  return (
    <div className={style.main}>
      <Sidebar />

      <div className={style.right_content}>
        <img
          src={process.env.PUBLIC_URL + "/assets/images/top_line.svg"}
          className={style.top_line}
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/images/net.svg"}
          className={style.net}
        />
        <img
          src={process.env.PUBLIC_URL + "/assets/images/corner.svg"}
          className={style.corner}
        />

        <Home />

        {/* <Switch>
          <Route path="/" exact component={User} />
          <Route path="/admin" exact component={Admin} />
          <Route
            path="*"
            component={() => {
              return <h1 className="">Page not found</h1>;
            }}
          />
        </Switch> */}
      </div>
    </div>
  );
};

export default User;
