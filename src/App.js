import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AuthContext from "./store/auth-Context";

function App() {
  const [isButtonActive, setIsButtonActive] = useState(false);

  const buttonToggle = () => {
    setIsButtonActive(!isButtonActive);
  };

  return (
    <AuthContext.Provider
      value={{
        isActive: isButtonActive,
        btnClick: buttonToggle,
      }}
    >
      <div className="main">
        <Sidebar />
        <div className="right_content">
          <img src="assets/images/top_line.svg" className="top_line" />
          <img src="assets/images/net.svg" className="net" />
          <img src="assets/images/corner.svg" className="corner" />
          <Home />
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
