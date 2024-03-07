import React from "react";
import "./App.css";
import SignUp from "../templates/SignInPage/SignUp/signUp";
import Login from "../templates/SignInPage/Login/login";
import Main from "../components/LeftSideBar/main";

const App = () => {
  return (
    <div className="bg-neutral-900">
      {/* <SignUp /> */}
      {/* <Login /> */}
      <Main />
    </div>
  );
};

export default App;
