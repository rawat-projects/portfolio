import React from "react";
import Button from "../../UI/Button";
import style from "../../user.module.css";

const Home = () => {
  return (
    <div className={`${style.home_page} ${style.page}`}>
      <div className={style.content}>
        <h6>Hello, I AM Sandeep rawat</h6>
        <h1>
          website <span>designer</span> & <br /> frontend <span>developer</span>
        </h1>
        <Button title="About Me" />
      </div>
    </div>
  );
};

export default Home;
