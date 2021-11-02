import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../user.module.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { getProjects } from "../../actions/projectActions";
import Loader from "../../components/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "font-awesome/css/font-awesome.min.css";
import "../../customStyle.css";

const Projects = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getProjects());
  }, [dispatch]);

  const filterHandler = (e) => {
    const allEl = [...e.target.closest(".tabs").children];
    allEl.forEach((item) => {
      return item.classList.remove("active");
    });
    e.target.classList.add("active");
    const filterItemName = e.target.getAttribute("target");

    document
      .querySelectorAll(".all_projects .singleItem")
      .forEach(function (item) {
        if (
          item.getAttribute("itemtype").toLowerCase().includes(filterItemName)
        ) {
          item.classList.remove("hide");
        } else {
          item.classList.add("hide");
        }
      });
  };

  return (
    <div className={`projects_page ${styles.projects_page} ${styles.page}`}>
      <div
        className={`${styles.projects_row} row ${styles["mx_-25"]} ${styles["mx_sm_-15"]}`}
      >
        <div
          className={`${styles.left_col} ${styles["px_25"]} ${styles["px_sm_15"]}`}
        >
          <div className={`${styles.left_content}`}>
            <h1 className={styles.page_title}>Projects</h1>
            <p>
              Here are the list of all the projects that I have created with my
              skills.
            </p>
            <div className={`tabs ${styles.tabs}`}>
              <button
                target="all"
                className={`btn active`}
                onClick={filterHandler}
              >
                All
              </button>
              <button target="html" className="btn" onClick={filterHandler}>
                HTML, CSS, JS
              </button>
              <button
                target="wordpress"
                className="btn"
                onClick={filterHandler}
              >
                Wordpress
              </button>
              <button target="react" className="btn" onClick={filterHandler}>
                React Js
              </button>
              <button target="mern" className="btn" onClick={filterHandler}>
                Mern
              </button>
            </div>
          </div>
        </div>

        <div
          className={`${styles.right_col} ${styles["px_25"]} ${styles["px_sm_15"]}`}
        >
          <PerfectScrollbar>
            <div className={`${styles.box} all_projects`}>
              {!loading ? (
                data ? (
                  data.map((singleProject) => {
                    const languages = singleProject.languages
                      .toString()
                      .replace(/,/g, " ");
                    return (
                      <div
                        className={`${styles.item} singleItem`}
                        itemType={`All ${languages}`}
                        key={singleProject._id}
                      >
                        <a
                          href={singleProject.link}
                          target="_blank"
                          className={styles.redirect_icon}
                        >
                          <i class="fa fa-external-link" aria-hidden="true"></i>
                        </a>
                        <figure>
                          <img
                            src={singleProject.projectImage}
                            alt="Cute cat"
                          />
                        </figure>
                        <div className={styles.itemContent}>
                          <h5>{singleProject.name}</h5>
                          <p>{singleProject.languages.join(", ")}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  "No Project Found"
                )
              ) : (
                <Loader />
              )}
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Projects;
