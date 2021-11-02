import React from "react";
import { useSelector } from "react-redux";

// import css
import cssModule from "../../user.module.css";

const About = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={cssModule.about_page}>
      <h1 className={cssModule.page_title}>About Me</h1>
      <div
        className={`${cssModule.content_section} ${cssModule["mx_-25"]} ${cssModule["mx_sm_-15"]}`}
      >
        <div
          className={`${cssModule.thumbnail} ${cssModule["px_25"]} ${cssModule["px_sm_15"]}`}
        >
          <figure>
            <img src={user.profileImage} />
          </figure>
        </div>
        <div
          className={`${cssModule.content} ${cssModule["px_25"]} ${cssModule["px_sm_15"]}`}
        >
          <h5 className={`${cssModule.name}`}>{user.name}</h5>
          <p className={`${cssModule.post}`}>{user.subHeading}</p>

          <p className={`${cssModule.aboutContent}`}>{user.aboutUser}</p>

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
            <a
              href="/assets/images/default_avtar.jpg"
              className={`${cssModule.button} ${cssModule.btn_fill} ${cssModule.download_cv}`}
              download="Sandeep Resume"
            >
              Download Cv
            </a>
          </div>
        </div>
      </div>

      <div
        className={`${cssModule.interest_row} ${cssModule["mx_-25"]} ${cssModule["mx_sm_-15"]}`}
      >
        <div
          className={`${cssModule.skills} ${cssModule.singleCol} ${cssModule["px_25"]} ${cssModule["px_sm_15"]}`}
        >
          <h5 className={cssModule.title}>Skills</h5>

          <ul>
            <li>
              <span className={cssModule.count}>01</span>
              <span className={cssModule.title}>
                <p>Photoshop</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>02</span>
              <span className={cssModule.title}>
                <p>Figma</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>03</span>
              <span className={cssModule.title}>
                <p>HTML</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>04</span>
              <span className={cssModule.title}>
                <p>CSS</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>05</span>
              <span className={cssModule.title}>
                <p>Javascript</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>06</span>
              <span className={cssModule.title}>
                <p>JQuery</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>07</span>
              <span className={cssModule.title}>
                <p>Wordpress</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>08</span>
              <span className={cssModule.title}>
                <p>React</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>09</span>
              <span className={cssModule.title}>
                <p>Express Js</p>
              </span>
            </li>

            <li>
              <span className={cssModule.count}>10</span>
              <span className={cssModule.title}>
                <p>Mongo DB</p>
              </span>
            </li>
          </ul>
        </div>

        <div
          className={`${cssModule.journey} ${cssModule.singleCol} ${cssModule["px_25"]} ${cssModule["px_sm_15"]}`}
        >
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
                <p className={cssModule.sub_title}>40+ Projects</p>
                <p>Completed</p>
              </span>
            </li>
          </ul>
        </div>

        <div
          className={`${cssModule.education} ${cssModule.singleCol} ${cssModule["px_25"]} ${cssModule["px_sm_15"]}`}
        >
          <h5 className={cssModule.title}>Education</h5>

          <ul>
            <li>
              <h5>Graduation</h5>
              <small>2015 - 2018</small>
              <p>Complete B.Com (Programme) from Delhi University</p>
            </li>
          </ul>
        </div>

        <div
          className={`${cssModule.interests} ${cssModule.singleCol} ${cssModule["px_25"]} ${cssModule["px_sm_15"]}`}
        >
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
