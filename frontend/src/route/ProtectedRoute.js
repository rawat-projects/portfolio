import React, { Fragment, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { isLogin } from "../actions/userActions";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogin());
  }, []);
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <Fragment>
      {loading === false && (
        <Route
          {...rest}
          render={(props) => {
            if (isAuthenticated === false) {
              return <Redirect to="/login" />;
            }

            return <Component {...props} />;
          }}
        />
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
