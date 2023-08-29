import { AppContext } from "./AppContext";
import React, { useState } from "react";
const AppState = (props) => {
  const [sidebar, setSidebar] = useState(true);
  
const [schoolName, setSchoolName] = useState();

  return (
    <div>
      <AppContext.Provider
        value={{ sidebar, setSidebar,schoolName, setSchoolName }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;
