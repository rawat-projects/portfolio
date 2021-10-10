import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, clearUser } from "../../actions/userActions";
import Loader from "../../components/Loader";
import { useAlert } from "react-alert";

const Login = ({ history }) => {
  const [userDetail, setUserDetail] = useState({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, user, isAuthenticated } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.append("username", userDetail.username);
    // formData.append("password", userDetail.password);

    const data = {
      username: userDetail.username,
      password: userDetail.password,
    };

    dispatch(login(data));
  };

  const changeHandler = (e) => {
    setUserDetail({
      ...userDetail,
      [e.target.name]: e.target.value,
    });

    dispatch(clearUser);
  };

  useEffect(() => {
    if(isAuthenticated){
      history.push('/')
    }
  }, [dispatch, alert, isAuthenticated, history])

  useEffect(() => {
    if (user && user.data && user.data.isAuthenticated === true) {
      alert.success(user.data.message);
      history.push("/");
    } else if (user && user.data && user.data.isAuthenticated === false) {
      alert.error(user.data.message);
    }
  }, [dispatch, submitHandler,isAuthenticated,history]);

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          name="username"
          id="exampleInputEmail1"
          value={userDetail.username}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          name="password"
          value={userDetail.password}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit {loading ? <Loader /> : null}
      </button>
    </form>
  );
};

export default Login;
