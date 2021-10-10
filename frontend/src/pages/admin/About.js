import React, { useState, useEffect } from "react";
import { updateUserData } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [profilePreview, setProfilePreview] = useState(
    "/assets/images/default_avtar.jpg"
  );

  const oldData = user && user[0];

  const [aboutData, setAboutData] = useState({
    profileImage: oldData && oldData.profileImage,
    name: oldData && oldData.name,
    subHeading: oldData && oldData.subHeading,
    email: oldData && oldData.email,
    number: oldData && oldData.phone,
    about: oldData && oldData.aboutUser,
  });
  const [editMode, setEditMode] = useState(false);

  const { profileImage, name, subHeading, email, number, about } = aboutData;

  const changeHandler = (e) => {
    if (e.target.name === "avatar") {
    } else {
      setAboutData({
        ...aboutData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const profileChangeHandler = (e) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (reader.readyState === 2) {
        setProfilePreview(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("username", "sandeep@gmail.com");
    formData.set(
      "password",
      "$2a$12$lDj2Di.jiByqNrgnKXcyWOE1tOLb5K979u8/z2rAJ5pI1Wgld40Zm"
    );
    formData.set("phone", number);
    formData.set("profileImage", profileImage);
    formData.set("name", name);
    formData.set("subHeading", subHeading);
    formData.set("email", email);
    formData.set("aboutUser", about);

    dispatch(updateUserData({ name: "Sandeep karmar" }));
  };

  // useEffect(() => {
  //   if (!user) {
  //     dispatch(loadUser());
  //   }
  // }, [dispatch]);

  return (
    <>
      {user && user[0] && (
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Image Review</label>
            <img
              src={oldData.profileImage ? oldData.profileImage : profilePreview}
              style={{ height: "200px", width: "200px", display: "block" }}
            />
          </div>
          <div className="form-group">
            <label>Choose Image</label>
            <input
              type="file"
              className="form-control"
              onChange={profileChangeHandler}
              readOnly={!editMode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={!editMode ? oldData.name : aboutData.name}
              onChange={changeHandler}
              readOnly={!editMode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subHeading">Sub Heading</label>
            <input
              type="text"
              id="subHeading"
              name="subHeading"
              className="form-control"
              value={!editMode ? oldData.subHeading : aboutData.subHeading}
              onChange={changeHandler}
              readOnly={!editMode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={changeHandler}
              value={!editMode ? oldData.email : aboutData.email}
              className="form-control"
              readOnly={!editMode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="number"
              id="number"
              name="number"
              onChange={changeHandler}
              value={!editMode ? oldData.phone : aboutData.phone}
              className="form-control"
              readOnly={!editMode}
            />
          </div>
          <div className="form-group">
            <label htmlFor="about">About Content</label>
            <textarea
              className="form-control"
              name="about"
              id="about"
              onChange={changeHandler}
              value={!editMode ? oldData.aboutUser : aboutData.aboutUser}
              readOnly={!editMode}
            ></textarea>
          </div>
          {!editMode ? (
            <input
              type="button"
              value="Edit"
              className="form-control mt-2"
              onClick={() => setEditMode(!editMode)}
            />
          ) : (
            <>
              <button onClick={() => setEditMode(!editMode)}>Back</button>
              <input type="submit" value="Save" className="form-control mt-2" />
            </>
          )}
        </form>
      )}
    </>
  );
};

export default About;
