import { AppContext } from "./AppContext";
import React, { useEffect, useState } from "react";
const AppState = (props) => {
  const [sidebar, setSidebar] = useState(true);

  const [schoolName, setSchoolName] = useState();
  const [sectionValue, setSectionValue] = useState("");
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    number: "",
    section: '',
})



  console.log("token", token)
  useEffect(() => {
    const storedValue = localStorage.getItem("sectionValue");
    setSectionValue(storedValue);
    const tokenStore = localStorage.getItem("tokenStore");
    setToken(tokenStore);
    console.log("sectionValue")
  }, []);
  // Save the sectionValue to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("sectionValue", sectionValue);
    localStorage.setItem("tokenStore", token);
  }, [sectionValue , token]);

  return (
    <div>
      <AppContext.Provider
        value={{ sidebar, setSidebar, schoolName, setSchoolName, setSectionValue, sectionValue, setToken, token , setFormData , formData }}
      >
        {props.children}
      </AppContext.Provider>
    </div>
  );
};

export default AppState;
