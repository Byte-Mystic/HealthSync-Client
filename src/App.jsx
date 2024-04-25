import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp, Login } from "../templates/SignInPage";
import Main from "../components/LeftSideBar/main";
import Dashboard from "../components/Dashboard/dashboard";
import PricingPage from "../templates/PricingPage/pricingPage";
import DragDrop from "../components/Drag-n-Drop/dragDrop";
import Error from "../templates/404/error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pricingpage" element={<PricingPage />} />
        <Route path="/404" element={<Error />} />
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
