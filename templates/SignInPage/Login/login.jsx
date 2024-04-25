import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { jwtDecode } from "jwt-decode";
import {useSelector, useDispatch} from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { signInSuccess, signInFailure, signInStart } from "../../../src/features/user/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error} = useSelector((state) => state)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      console.log("Please fill in all the required fields.");
      return;
    }
    try {
      dispatch(signInStart());
      const res = await fetch("/api/user/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok === false) {
        dispatch(signInFailure(data));
        toast.error("Wrong Credentials.");
        return;
      }
      const decodedToken = jwtDecode(data["access"]);
      data["username"] = decodedToken.username;
      data["email"] = decodedToken.email;
      dispatch(signInSuccess(data));
      navigate("/dashboard");
    } catch (err) {
      dispatch(signInFailure(err.message));
      console.error(error);
      return; 
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="h-screen flex max-md:flex-col">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
      <div className="h-1/3 login-background min-lg:hidden" />
      <div className="h-screen w-screen login-background max-md:hidden" />
      <div className="h-full w-screen flex flex-col">
        <span className="px-4 pt-4 text-end flex flex-col max-md:pt-2">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            Still Haven't Logged In Yet?
          </p>
          <p className="mr-1 text-lg font-bold text-gray-500 hover:tracking-wide hover:text-slate-700 transition-all duration-500 delay-75 cursor-pointer">
            <Link to="/register">
              SignUp
            </Link>
          </p>
        </span>
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-5xl max-md:text-3xl text-slate-700">
            LogIn.
          </h1>
          <input
            id="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            className="w-1/2 input-field"
            required
          />
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            onChange={handleChange}
            className="w-1/2 input-field"
            required
          />
          <button
            className="w-1/2 btn active-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Log In
          </button>
          <p className="text-gray-400">OR</p>
          <button className="w-1/2 btn flex items-center justify-center bg-blue-600 text-white">
            Sign in With
            <FaGoogle className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
