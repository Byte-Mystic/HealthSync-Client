import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp, Login } from "../templates/SignInPage";
import Main from "../components/LeftSideBar/main";
import Dashboard from "../components/Dashboard/dashboard";
import PricingPage from "../templates/PricingPage/pricingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricingpage" element={<PricingPage />} />
        {/* <div className="bg-neutral-900">
          {/* <SignUp />
          {/* <Login />
          <Main />
        </div> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
