import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa6";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", { email, password });
  };

  return (
    <div className="h-screen flex max-md:flex-col">
      <div className="h-1/3 login-background min-lg:hidden" />
      <div className="h-screen w-screen login-background max-md:hidden" />
      <div className="h-full w-screen flex flex-col">
        <span className="px-4 pt-4 text-end flex flex-col max-md:pt-2">
          <p className="text-xs text-slate-500 font-medium tracking-wide">
            Still Haven't Logged In Yet?
          </p>
          <p className="mr-1 text-lg font-bold text-gray-500 hover:tracking-wide hover:text-slate-700 transition-all duration-500 delay-75 cursor-pointer">
            SignUp
          </p>
        </span>
        <form
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col items-center justify-center gap-4"
        >
          <h1 className="font-bold text-5xl max-md:text-3xl text-slate-700">
            LogIn.
          </h1>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-1/2 input-field"
            required
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-1/2 input-field"
            required
          />
          <button className="w-1/2 btn active-btn" type="submit">
            Log In
          </button>
          <p className="text-gray-400">OR</p>
          <button className="w-1/2 btn flex items-center justify-center bg-blue-600 text-white">
            Sign in With
            <FaGoogle className="ml-2" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;