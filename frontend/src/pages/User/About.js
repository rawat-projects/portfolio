import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUser, clearUser } from "../../actions/userActions";
import { useAlert } from "react-alert";

// import css
import cssModule from "../../user.module.css";

const About = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const history = useHistory();

  const { user, message, isAuthenticated } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getUser(history));

  //   console.log("message", message);

  //   // if (isAuthenticated === true && message) {
  //   //   alert.success(message);
  //   // } else if (isAuthenticated === false) {
  //   //   alert.error(message);
  //   // }
  //   return () => {
  //     dispatch(clearUser());
  //   };
  // }, [dispatch, isAuthenticated]);

  return (
    <div className={cssModule.about_page}>
      <h1 className={cssModule.page_title}>About Me</h1>
      <div className={`${cssModule.content_section} ${cssModule["mx_-25"]}`}>
        <div className={`${cssModule.thumbnail} ${cssModule["px_25"]}`}>
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/assets/images/default_avtar.jpg"}
            />
          </figure>
        </div>
        <div className={`${cssModule.content} ${cssModule["px_25"]}`}>
          <h5 className={`${cssModule.name}`}>Sandeep Rawat</h5>
          <p className={`${cssModule.post}`}>Frontend Developer & Designer</p>

          <p>Hello! I'm Sandeep Rawat</p>

          <div className={cssModule.btns}>
            <a
              href="javascript:void(0)"
              className={`${cssModule.button} ${cssModule["btn_border"]}`}
            >
              Call
            </a>
            <a
              href="javascript:void(0)"
              className={`${cssModule.button} ${cssModule["btn_border"]}`}
            >
              Email
            </a>
            <button
              className={`${cssModule.button} ${cssModule.btn_fill} ${cssModule.download_cv}`}
            >
              Download Cv
            </button>
          </div>
        </div>
      </div>

      <div className={`${cssModule.interest_row} ${cssModule["mx_-25"]}`}>
        <div className={`${cssModule.journey} ${cssModule["px_25"]}`}>
          <h5 className={cssModule.title}>My Journey</h5>

          <ul>
            <li>
              <span className={cssModule.icon}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/experience.png"}
                />
              </span>
              <span className={cssModule.text}>
                <p className={cssModule.sub_title}>2+ Years Job</p>
                <p>Experience</p>
              </span>
            </li>

            <li>
              <span className={cssModule.icon}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/projects.png"}
                />
              </span>
              <span className={cssModule.text}>
                <p className={cssModule.sub_title}>100+ Projects</p>
                <p>Completed</p>
              </span>
            </li>
          </ul>
        </div>

        <div className={`${cssModule.interests} ${cssModule["px_25"]}`}>
          <h5 className={cssModule.title}>My Interests</h5>

          <ul>
            <li>
              <span className={cssModule.icon}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/travel.png"}
                />
              </span>
              <span className={cssModule.text}>
                <p className={cssModule.sub_title}>Travelling</p>
              </span>
            </li>

            <li>
              <span className={cssModule.icon}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/sport.png"}
                />
              </span>
              <span className={cssModule.text}>
                <p className={cssModule.sub_title}>Playing Sports</p>
              </span>
            </li>

            <li>
              <span className={cssModule.icon}>
                <img
                  src={process.env.PUBLIC_URL + "/assets/images/music.png"}
                />
              </span>
              <span className={cssModule.text}>
                <p className={cssModule.sub_title}>Listening Music</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
