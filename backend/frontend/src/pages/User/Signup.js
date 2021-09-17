import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import { useSelector, useDispatch } from "react-redux";
import { register, clearUser } from "../../actions/userActions";
import Button from "../../UI/Button";
import style from "../../user.module.css";
import { useAlert } from "react-alert";
import formdata from "form-data";
import axios from "axios";

const Signup = ({ history }) => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [profile, setProfile] = useState("");
  const [profileName, setProfileName] = useState("");
  const [profilePreview, setProfilePreview] = useState(
    "/assets/images/default_avtar.jpg"
  );
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.auth);

  const submitHandler = (e) => {
    e.preventDefault();

    // const formData = new FormData();
    // formData.set("username", username);
    // formData.set("password", password);
    const formData = new FormData();
    formData.append("username", userDetails.username);
    formData.append("password", userDetails.password);
    formData.append("profileImage", profile);
    dispatch(register(formData));
  };

  const changeHandler = (e) => {
    if (e.target.name === "image") {
      const file = e.target.files[0];
      // const reader = new FileReader();

      // reader.onload = () => {
      //   if (reader.readyState === 2) {
      //     setProfilePreview(reader.result);
      //     setProfile(reader.result);
      //   }
      // };

      // reader.readAsDataURL(file);
    } else {
      setUserDetails({
        ...userDetails,
        [e.target.name]: e.target.value,
      });
    }

    dispatch(clearUser);
  };

  useEffect(() => {
    if (user && user.data && user.data.isAuthenticated === true) {
      alert.success(user.data.message);
      history.push("/login");
    } else if (user && user.data && user.data.isAuthenticated === false) {
      alert.error(user.data.message);
    }
  }, [dispatch, submitHandler]);

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <img src={profilePreview} style={{ height: "200px", width: "200px" }} />
        <label htmlFor="profile">Profile Image</label>
        <input
          type="file"
          className="form-control"
          id="profile"
          name="image"
          onChange={(e) => {
            const file = e.target.files[0];
            setProfile(file);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="username"
          value={userDetails.username}
          onChange={changeHandler}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={userDetails.password}
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

export default Signup;
