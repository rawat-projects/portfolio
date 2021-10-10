import React, { useState, useEffect } from "react";
import { Redirect, useLocation, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "../../actions/userActions";

const Dashboard = () => {
  const [isUserLogin, setIsUserLogin] = useState("");
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <>
      <h1>Welcome to Dashboard1</h1>
    </>
  );
};

export default Dashboard;
