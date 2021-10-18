import React from "react";
import { useSelector } from "react-redux";

// import css
import cssModule from "../../user.module.css";

const About = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={cssModule.about_page}>
      <h1 className={cssModule.page_title}>About Me</h1>
      <div className={`${cssModule.content_section} ${cssModule["mx_-25"]}`}>
        <div className={`${cssModule.thumbnail} ${cssModule["px_25"]}`}>
          <figure>
            <img src={user.profileImage} />
          </figure>
        </div>
        <div className={`${cssModule.content} ${cssModule["px_25"]}`}>
          <h5 className={`${cssModule.name}`}>{user.name}</h5>
          <p className={`${cssModule.post}`}>{user.subHeading}</p>

          <p>{user.aboutUser}</p>

          <div className={cssModule.btns}>
            <a
              href={`tel:${user.phone}`}
              className={`${cssModule.button} ${cssModule["btn_border"]}`}
            >
              Call
            </a>
            <a
              href={`mailto:${user.email}`}
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
