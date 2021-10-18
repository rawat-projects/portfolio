import React from "react";
import style from "../user.module.css";

const Loader = () => {
  return (
    <>
      <div className={style.main_loader}>
        <div className={style.loader}></div>
        <h1>Please wait...</h1>
      </div>
    </>
  );
};

export default Loader;
