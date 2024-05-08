import React, { useState, useEffect } from "react";
import { GrChat } from "react-icons/gr";
import { IoFemale, IoSettingsOutline } from "react-icons/io5";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { FaRegEye, FaBrain } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Main = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [selected, setSelected] = useState("");

  const handleClick = (option) => {
    setSelected(option);
  };


  return (
    <div className="h-full flex flex-col gap-6 items-center justify-center xl:gap-0">
      <div className="h-3/4 w-full pt-8 flex flex-col items-center">
        <span className="height-10 w-full flex items-center justify-center">
          <img
            src="../../src/assets/logo.png"
            alt=""
            className="-ml-6 h-20 object-contain max-xl:hidden"
          />
          <TbLayoutSidebarLeftExpand className="text-2xl text-gray-500 transition ease-in-out duration-300 delay-75 cursor-pointer hover:text-gray-400" />
        </span>
        <ul className="my-8 xl:w-full list-none overflow-y-scroll scrollbar-none">
          <Link to="/dashboard" className="" onClick={() => handleClick("chats")}>
            <li
              className={`p-4 flex items-center justify-center rounded-lg ${selected === "chats"
                ? "bg-gradient-to-l from-[#323337] to-[rgba(70,79,111,0.3)]"
                : "bg-transparent"
                } xl:justify-start cursor-pointer`}
            >
              <GrChat className="xl:mr-4 text-xl -scale-x-100 text-blue-600" />
              <p
                className={`font-bold tracking-wide max-xl:hidden ${selected === "chats" ? "text-white" : "text-slate-400"
                  }`}
              >
                Chats
              </p>
            </li>
          </Link>
          <Link to="/medicalReport" className="" onClick={() => handleClick("oct")}>
            <li
              className={`p-4 flex items-center justify-center rounded-lg ${selected === "oct"
                ? "bg-gradient-to-l from-[#323337] to-[rgba(70,79,111,0.3)]"
                : "bg-transparent"
                } xl:justify-start cursor-pointer`}
            >
              <FaRegEye className="xl:mr-4 text-2xl text-orange-500" />
              <p
                className={`font-bold tracking-wide max-xl:hidden ${selected === "oct" ? "text-white" : "text-slate-400"
                  }`}
              >
                OCT
              </p>
            </li>
          </Link>
          <Link to="/medicalReport-mri" onClick={() => handleClick("mri")}>
            <li
              className={`p-4 flex items-center justify-center rounded-lg ${selected === "mri"
                ? "bg-gradient-to-l from-[#323337] to-[rgba(70,79,111,0.3)]"
                : "bg-transparent"
                } xl:justify-start cursor-pointer`}
            >
              <FaBrain className="xl:mr-4 text-2xl text-emerald-600" />
              <p
                className={`font-bold tracking-wide max-xl:hidden ${selected === "mri" ? "text-white" : "text-slate-400"
                  }`}
              >
                MRI
              </p>
            </li>
          </Link>
          <Link to="/medicalReport-mammo" className="" onClick={() => handleClick("mammography")}>
            <li
              className={`p-4 flex items-center justify-center rounded-lg ${selected === "mammography"
                ? "bg-gradient-to-l from-[#323337] to-[rgba(70,79,111,0.3)]"
                : "bg-transparent"
                } xl:justify-start cursor-pointer`}
            >
              <IoFemale className="xl:mr-4 text-2xl text-pink-600" />
              <p
                className={`font-bold tracking-wide max-xl:hidden ${selected === "mammography" ? "text-white" : "text-slate-400"
                  }`}
              >
                Mammography
              </p>
            </li>
          </Link>
          <li
            className={`p-4 flex items-center justify-center rounded-lg ${selected === "settings"
              ? "bg-gradient-to-l from-[#323337] to-[rgba(70,79,111,0.3)]"
              : "bg-transparent"
              } xl:justify-start cursor-pointer`}
            onClick={() => handleClick("settings")}
          >
            <IoSettingsOutline className="xl:mr-4 text-2xl text-purple-500" />
            <p
              className={`font-bold tracking-wide max-xl:hidden ${selected === "settings" ? "text-white" : "text-slate-400"
                }`}
            >
              Settings
            </p>
          </li>
        </ul>
        <hr className="w-full border-slate-600" />
      </div>
      <div className="h-1/4 w-full flex flex-col items-center gap-4">
        <div className="h-3/5 w-full flex justify-center items-center xl:items-center xl:justify-evenly xl:bg-neutral-800 xl:rounded-xl xl:p-2 xl:gap-2">
          <img
            src="../../src/assets/bg-2.jpg"
            alt=""
            className="h-12 w-12 object-cover rounded-full xl:h-10 xl:w-10"
          />
          <span className="w-3/4 flex flex-col items-start justify-start gap-1 max-xl:hidden whitespace-nowrap text-ellipsis overflow-hidden">
            <span className="flex items-center justify-start gap-2">
              <p className="text-xl font-semibold text-white">
                {currentUser.username}
              </p>
              <p className="text-xs font-medium text-white bg-green-600 py-1 px-2 rounded-md tracking-wider">
                Free
              </p>
            </span>
            <p className="text-xl font-medium text-white">
              {currentUser.email}
            </p>
          </span>
        </div>
        <div className="h-2/5 w-full flex items-center justify-evenly bg-neutral-800 rounded-xl xl:py-2 xl:px-4 xl:gap-4">
          <button className="h-full w-full group flex items-center justify-center rounded-xl transition duration-300 ease-in-out hover:bg-gray-300 hover:text-yellow-500 xl:gap-2 xl:p-2">
            <IoMdSunny className="text-2xl text-gray-600 group-hover:text-orange-500" />
            <p className="max-xl:hidden font-semibold text-gray-600 group-hover:text-orange-500">
              Light
            </p>
          </button>
          <button className="h-full w-full group flex items-center justify-center rounded-xl transition duration-300 ease-in-out hover:bg-gray-800 max-xl:hidden xl:gap-2 bg-neutral-900 xl:p-2">
            <IoMdMoon className="text-2xl text-gray-600 group-hover:text-gray-300" />
            <p className="max-xl:hidden font-semibold text-gray-600 group-hover:text-gray-300">
              Dark
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
