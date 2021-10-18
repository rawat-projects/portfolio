import React from "react";

import Button from "../../UI/Button";
import style from "../../user.module.css";
import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className={`${style.home_page} ${style.page}`}>
      <div className={`${style.col} ${style.coding}`}>
        <img src={process.env.PUBLIC_URL + "/assets/images/coding.jpg"} />
      </div>
      <div className={`${style.col} ${style.designing}`}>
        <img src={process.env.PUBLIC_URL + "/assets/images/designing.jpg"} />
      </div>
      <div className={style.content}>
        <h6>Hello, I AM {user.name}</h6>
        <h1>
          Frontend <span>Developer</span> & <br /> Website <span>Designer</span>
        </h1>
        <Button title="About Me" />
      </div>
    </div>
  );
};

export default Home;
