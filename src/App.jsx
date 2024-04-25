import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SignUp, Login } from "../templates/SignInPage";
import Main from "../components/LeftSideBar/main";
import PrivateRoute from "../components/PrivateRoute";
import Dashboard from "../components/Dashboard/dashboard";
import PricingPage from "../templates/PricingPage/pricingPage";
import DragDrop from "../components/Drag-n-Drop/dragDrop";
import Home from "../components/Home/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pricingpage" element={<PricingPage />} />
          <Route path="/dragdrop" element={<DragDrop />} />
        </Route>
        <Route index element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
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
