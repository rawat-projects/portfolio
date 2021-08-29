import React from "react";

const authContext = React.createContext({
  isActive: false,
  btnClick: () => {},
});

export default authContext;
