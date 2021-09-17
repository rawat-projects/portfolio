import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";
import Dashboard from "../pages/admin/Dashboard";
import style from "../admin.module.css";

const Admin = () => {
  return (
    <div className={style.admin_main}>
      <Sidebar />
      <Switch>
        <Route path="/admin/dashboard" exact component={Dashboard} />
        <Route
          path="/admin/contact"
          exact
          component={() => {
            return <h1>hello</h1>;
          }}
        />
      </Switch>
    </div>
  );
};

export default Admin;
