import React from "react";
import Button from "../../UI/Button";
import styles from "../../user.module.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import PerfectScrollbar from "react-perfect-scrollbar";

const Projects = () => {
  return (
    <div className={`${styles.projects_page} ${styles.page}`}>
      <div className={`${styles.projects_row} ${styles["mx_-25"]}`}>
        <div className={`${styles.left_col} ${styles["px_25"]}`}>
          <div className={`${styles.left_content}`}>
            <h1 className={styles.page_title}>Projects</h1>
            <p>
              Here are the list of all the projects that I have created with my
              skills. You can search project and filter it out.
            </p>
          </div>
        </div>

        <div className={`${styles.right_col} ${styles["px_25"]}`}>
          <PerfectScrollbar>
            <div className={styles.box}>
              <div className={styles.item}>
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1422360902398-0a91ff2c1a1f?dpr=1&auto=compress,format&fit=crop&w=716&h=&q=80&cs=tinysrgb&crop="
                    alt="Cute cat"
                  />
                </figure>
                <div className={styles.itemContent}>
                  <h5>ShopIt</h5>
                  <p>HTML, CSS, Javascript</p>
                </div>
              </div>

              <div className={styles.item}>
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1472073834672-adb08feda350?dpr=1&auto=compress,format&fit=crop&w=334&h=&q=80&cs=tinysrgb&crop="
                    alt="Cute cat"
                  />
                </figure>
                <div className={styles.itemContent}>
                  <h5>ShopIt</h5>
                  <p>HTML, CSS, Javascript</p>
                </div>
              </div>

              <div className={styles.item}>
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1469692422776-14abcfa4b525?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="
                    alt="Cute cat"
                  />
                </figure>
                <div className={styles.itemContent}>
                  <h5>ShopIt</h5>
                  <p>HTML, CSS, Javascript</p>
                </div>
              </div>

              <div className={styles.item}>
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1500305444797-4f07d56c170a?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="
                    alt="Cute cat"
                  />
                </figure>
                <div className={styles.itemContent}>
                  <h5>ShopIt</h5>
                  <p>HTML, CSS, Javascript</p>
                </div>
              </div>

              <div className={styles.item}>
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1500305444797-4f07d56c170a?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="
                    alt="Cute cat"
                  />
                </figure>
                <div className={styles.itemContent}>
                  <h5>ShopIt</h5>
                  <p>HTML, CSS, Javascript</p>
                </div>
              </div>

              <div className={styles.item}>
                <figure>
                  <img
                    src="https://images.unsplash.com/photo-1500305444797-4f07d56c170a?dpr=1&auto=compress,format&fit=crop&w=750&h=&q=80&cs=tinysrgb&crop="
                    alt="Cute cat"
                  />
                </figure>
                <div className={styles.itemContent}>
                  <h5>ShopIt</h5>
                  <p>HTML, CSS, Javascript</p>
                </div>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default Projects;
