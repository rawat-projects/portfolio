import React, { useState, useEffect } from "react";
import { updateUserData } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

const About = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [aboutData, setAboutData] = useState({
    profilePreview: "/assets/images/default_avtar.jpg",
    profileImage: "",
    name: "",
    subHeading: "",
    email: "",
    number: "",
    about: "",
  });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    if (user) {
      const oldData = user;

      setAboutData({
        ...aboutData,
        profilePreview: oldData.profileImage,
        profileImage: oldData.profileImage,
        name: oldData.name,
        subHeading: oldData.subHeading,
        email: oldData.email,
        number: oldData.phone,
        about: oldData.aboutUser,
      });
    }
  }, []);

  const {
    profilePreview,
    profileImage,
    name,
    subHeading,
    email,
    number,
    about,
  } = aboutData;

  const changeHandler = (e) => {
    if (e.target.name === "avatar") {
      // setAboutData({
      //   ...aboutData,
      //   profileImage: e.target.files[0],
      // });

      const reader = new FileReader();

      reader.readAsDataURL(e.target.files[0]);

      reader.onload = function () {
        if (reader.readyState === 2) {
          setAboutData({
            ...aboutData,
            profilePreview: reader.result,
          });
        }
      };
    } else {
      setAboutData({
        ...aboutData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("phone", number);
    formData.set("profileImage", profileImage);
    formData.set("name", name);
    formData.set("subHeading", subHeading);
    formData.set("email", email);
    formData.set("aboutUser", about);

    dispatch(updateUserData(formData));
  };

  return (
    <>
      {user && (
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Image Review</label>
            <img
              src={profilePreview}
              style={{ height: "200px", width: "200px", display: "block" }}
            />
          </div>
          <div className="form-group">
            <label>Choose Image</label>
            <input
              type="file"
              name="avatar"
              className="form-control"
              onChange={(e) => {
                const file = e.target.files[0];
                setAboutData({
                  ...aboutData,
                  profileImage: file,
                });
              }}
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
              value={name}
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
              value={subHeading}
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
              value={email}
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
              value={number}
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
              value={about}
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
