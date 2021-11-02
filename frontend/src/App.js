import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";

// user
import User from "./layouts/User";
import Sidebar from "./components/Sidebar";
import Home from "./pages/User/Home";
import Login from "./pages/User/Login";
import Signup from "./pages/User/Signup";
import About from "./pages/User/About";
import Projects from "./pages/User/Projects";
import Menus from "./components/Menus";
import style from "./user.module.css";

// admin
import Admin from "./layouts/Admin";
import Dashboard from "./pages/admin/Dashboard";
import AdminSidebar from "./components/admin/Sidebar";
import Contact from "./pages/admin/Contact";
import AdminAbout from "./pages/admin/About";
import UserProjects from "./pages/admin/UserProjects";
import EditProject from "./pages/admin/EditProject";
import AddProject from "./pages/admin/AddProject";
import adminStyle from "./admin.module.css";

import Loader from "./components/Loader";
import { loadUser, isLogin } from "./actions/userActions";
import ProtectedRoute from "./route/ProtectedRoute";

function App(props) {
  const [isMenusShow, setIsMenusShow] = useState(false);
  const { loading, isUserLogin } = useSelector((state) => state.auth);

  let location = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(loadUser());
    if (location.pathname.includes("admin")) {
      dispatch(isLogin());
    }
  }, []);

  const menusOpen = () => {
    setIsMenusShow(true);
  };

  const menusClose = () => {
    setIsMenusShow(false);
  };

  if (location.pathname.includes("admin")) {
    if (isUserLogin) {
      return (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className={adminStyle.admin_main}>
                <AdminSidebar />
                <div className={adminStyle.admin_contents}>
                  <Switch>
                    <Route exact path="/admin/contact" component={Contact} />
                    <Route path="/admin/about">
                      <AdminAbout />
                    </Route>
                    <Route
                      path="/admin/projects/edit/:id"
                      exact
                      component={EditProject}
                    />
                    <Route
                      path="/admin/projects"
                      exact
                      component={UserProjects}
                    />
                    <Route
                      path="/admin/projects/add"
                      exact
                      component={AddProject}
                    />
                    <Route
                      exact
                      path="/admin/dashboard"
                      component={Dashboard}
                    />

                    <Route
                      path="/admin/"
                      exact
                      component={() => <Redirect to="/admin/dashboard" />}
                    />
                    <Route path="*">
                      <h1 className="">Page not found</h1>
                    </Route>
                  </Switch>
                </div>
              </div>
            </>
          )}
        </>
      );
    } else {
      return (
        <>
          {loading ? (
            <Loader />
          ) : (
            <>
              <div className={adminStyle.admin_main}>
                <AdminSidebar />
                <div className={adminStyle.admin_contents}>
                  <Route
                    path="*"
                    exact
                    component={() => {
                      return <Redirect to="/login" />;
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </>
      );
    }
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className={style.main}>
          <Sidebar menus={menusOpen} ismenushow={isMenusShow} />
          <Menus menuShow={isMenusShow} menuClose={menusClose} />
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
              <Route path="/about" exact component={About} />
              <Route path="/projects" exact component={Projects} />
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
