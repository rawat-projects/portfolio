import React, { useState, useEffect } from "react";
import { Route, Link, Switch, Redirect, useLocation } from "react-router-dom";
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

import store from "./store";
import Loader from "./components/Loader";
import { loadUser } from "./actions/userActions";
import ProtectedRoute from "./route/ProtectedRoute";

function App(props) {
  const [isMenusShow, setIsMenusShow] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  let location = useLocation();
  const dispatch = useDispatch();
  const alert = useAlert();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const menusOpen = () => {
    setIsMenusShow(true);
  };

  const menusClose = () => {
    setIsMenusShow(false);
  };

  if (location.pathname.includes("admin/contact")) {
    return (
      <>
        <div className={adminStyle.admin_main}>
          <AdminSidebar />
          <div className={adminStyle.admin_contents}>
            <ProtectedRoute path="/admin/contact" component={Contact} />
          </div>
        </div>
      </>
    );
  }

  if (location.pathname.includes("admin/about")) {
    return (
      <>
        <div className={adminStyle.admin_main}>
          <AdminSidebar />
          <div className={adminStyle.admin_contents}>
            <ProtectedRoute path="/admin/about" component={AdminAbout} />
          </div>
        </div>
      </>
    );
  }

  if (location.pathname.includes("admin/projects/edit")) {
    return (
      <>
        <div className={adminStyle.admin_main}>
          <AdminSidebar />
          <div className={adminStyle.admin_contents}>
            <ProtectedRoute
              path="/admin/projects/edit/:projectId"
              component={EditProject}
            />
          </div>
        </div>
      </>
    );
  }

  if (location.pathname.includes("admin/projects/add")) {
    return (
      <>
        <div className={adminStyle.admin_main}>
          <AdminSidebar />
          <div className={adminStyle.admin_contents}>
            <ProtectedRoute path="/admin/projects/add" component={AddProject} />
          </div>
        </div>
      </>
    );
  }

  if (location.pathname.includes("admin/projects")) {
    return (
      <>
        <div className={adminStyle.admin_main}>
          <AdminSidebar />
          <div className={adminStyle.admin_contents}>
            <ProtectedRoute path="/admin/projects" component={UserProjects} />
          </div>
        </div>
      </>
    );
  }

  if (location.pathname.includes("admin/dashboard")) {
    return (
      <>
        <div className={adminStyle.admin_main}>
          <AdminSidebar />
          <div className={adminStyle.admin_contents}>
            <ProtectedRoute path="/admin/dashboard" component={Dashboard} />
          </div>
        </div>
      </>
    );
  }

  if (location.pathname.includes("admin")) {
    return (
      <>
        <Redirect to="/admin/dashboard" />
        {/* <div className={adminStyle.admin_main}>
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
              <Route path="/adminLogin" exact component={Login} />
              <Route
                path="*"
                component={() => {
                  return <h1 className="">Page not found</h1>;
                }}
              />
            </Switch>
          </div>
        </div> */}
      </>
    );
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
