import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signUpSuccess } from "../../../src/features/user/userSlice";

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.username || !formData.email || !formData.password2 ||
      !formData.password
    ) {
      console.log(formData);
      console.log("Please fill in all the required fields.");
      return;
    }
    if (formData.password !== formData.password2) {
      console.log("Password do not match.");
      return;
    }
    try {
      const res = await fetch("/api/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok === false) {
        dispatch(signUpFailure(data));
        if (data.password) {
          console.log("Password length > 8");
        } else if (data.email) {
          console.log("Email Already Exists");
        }
        return;
      }
      dispatch(signUpSuccess(data));
      console.log("User Created Successfully.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen flex max-md:flex-col">
      <div className="h-1/3 sign-up-background min-lg:hidden" />
      <div className="h-full w-screen flex flex-col">
        <span className="px-4 pt-4 text-end flex flex-col max-md:pt-2">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            Already An Existing User?
          </p>
          <p className="mr-1 text-lg font-bold text-gray-500 hover:tracking-wide hover:text-slate-700 transition-all duration-500 delay-75 cursor-pointer">
            <Link to="/login">
              Login
            </Link>
          </p>
        </span>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col items-center justify-center gap-4"
        >
          <h1 className="font-bold text-5xl max-md:text-3xl text-slate-700">
            Sign Up.
          </h1>
          <input
            id="username"
            type="text"
            placeholder="Username"
            onChange={handleChange}
            className="w-1/2 input-field"
          />
          <input
            id="email"
            type="text"
            placeholder="Email"
            onChange={handleChange}
            className="w-1/2 input-field"
          />
          <input
            id="password"
            type="password"
            placeholder="Enter your Password"
            onChange={handleChange}
            className="w-1/2 input-field"
          />
          <input
            id="password2"
            type="password"
            placeholder="Re-enter Your Password"
            onChange={handleChange}
            className="w-1/2 input-field"
          />
          <button
            className="w-1/2 btn active-btn"
            type="submit"
            onClick={handleSubmit}
          >
            Create Account
          </button>
          <p className="text-gray-400">OR</p>
          <button className="w-1/2 btn flex items-center justify-center bg-blue-600 text-white">
            Sign in With
            <FaGoogle className="ml-2 " />
          </button>
        </form>
      </div>
      <div className="h-screen w-screen sign-up-background max-md:hidden" />
    </div>
  );
};

export default SignUp;
