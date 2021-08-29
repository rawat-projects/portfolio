import React, { useContext } from "react";
import Button from "../UI/Button";
import AuthContext from "../store/auth-Context";

const Home = () => {
  const auth = useContext(AuthContext);

  return (
    <div className="home_page page">
      <div className="content">
        <h6>Hello, I AM Sandeep rawat</h6>
        <h1>
          website <span>designer</span> & <br /> frontend <span>developer</span>
        </h1>
        <Button
          title="About Me"
          click={auth.btnClick}
          classname={auth.isActive ? "active" : ""}
        />
      </div>
    </div>
  );
};

export default Home;
