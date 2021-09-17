import React, { useState } from "react";
import { Route, Link, Switch, Redirect, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";

// user
import User from "./layouts/User";
import Sidebar from "./components/Sidebar";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import style from "./user.module.css";

// admin
import Admin from "./layouts/Admin";
import Dashboard from "./pages/admin/Dashboard";
import AdminSidebar from "./components/admin/Sidebar";
import Contact from "./pages/admin/Contact";
import adminStyle from "./admin.module.css";

function App(props) {
  const [isButtonActive, setIsButtonActive] = useState(false);
  let location = useLocation();
  const alert = useAlert();

  const buttonToggle = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <>
      {!location.pathname.includes("admin") ? (
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
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route
                path="*"
                component={() => {
                  return <h1 className="">Page not found</h1>;
                }}
              />
            </Switch>
          </div>
        </div>
      ) : (
        <div className={adminStyle.admin_main}>
          <AdminSidebar />
          <div className="admin_contents">
            <Switch>
              <Route
                path="/admin"
                exact
                render={() => {
                  return <Redirect to="/admin/dashboard" />;
                }}
              />
              <Route path="/admin/dashboard" exact component={Dashboard} />
              <Route path="/admin/contact" exact component={Contact} />
              <Route
                path="*"
                component={() => {
                  return <h1 className="">Page not found</h1>;
                }}
              />
            </Switch>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
