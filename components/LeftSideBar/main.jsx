import React, { useState } from "react";
import { GrChat } from "react-icons/gr";
import { IoFemale, IoSettingsOutline } from "react-icons/io5";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { TbLayoutSidebarRightExpandFilled } from "react-icons/tb";
import { FaRegEye, FaBrain } from "react-icons/fa";

const Main = () => {
  return (
    <div className="py-6 px-4 flex flex-col justify-between">
      {/* Brand */}
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <img src="" alt="" />
          <h1 className="font-bold text-2xl tracking-wider text-white">
            HealthSync
          </h1>
        </div>
        <TbLayoutSidebarRightExpandFilled className="text-3xl text-gray-300" />
      </div>

      {/* List Options */}
      <div className="my-4 p-4 h-full flex flex-col justify-between">
        <div className="h-full my-4">
          <ul className="list-none h-60 overflow-y-scroll scrollbar-none">
            <li className="gap-6 my-2 px-4 py-3 w-full flex items-center justify-start rounded-lg bg-gradient-to-l from-[#323337] to-[rgba(70,79,111,0.3)]">
              <GrChat className="text-xl -scale-x-100 text-blue-600" />
              <p className="font-bold text-white tracking-wide">Chats</p>
            </li>
            <li className="gap-6 mb-2 px-4 py-3 w-full flex items-center justify-start rounded-lg cursor-pointer">
              <FaRegEye className="text-2xl text-orange-500" />
              <p className="font-bold text-slate-400 tracking-wide hover:text-white transition ease-in-out duration-200">
                OCT
              </p>
            </li>
            <li className="gap-6 mb-2 px-4 py-3 w-full flex items-center justify-start rounded-lg cursor-pointer">
              <FaBrain className="text-2xl text-emerald-600" />
              <p className="font-bold text-slate-400 tracking-wide hover:text-white transition ease-in-out duration-200">
                MRI
              </p>
            </li>
            <li className="gap-6 mb-2 px-4 py-3 w-full flex items-center justify-start rounded-lg cursor-pointer">
              <IoFemale className="text-2xl text-pink-600" />
              <p className="font-bold text-slate-400 tracking-wide hover:text-white transition ease-in-out duration-200">
                Mammography
              </p>
            </li>
            <li className="gap-6 mb-2 px-4 py-3 w-full flex items-center justify-start rounded-lg cursor-pointer">
              <IoSettingsOutline className="text-2xl text-purple-500" />
              <p className="font-bold text-slate-400 tracking-wide hover:text-white transition ease-in-out duration-200">
                Settings
              </p>
            </li>
          </ul>
        </div>
        <hr className="border-slate-600" />
      </div>

      {/* User Details */}
      <div className="flex flex-col">
        <div className="px-4 py-2 flex flex-col bg-neutral-800 rounded-lg">
          <div className="mt-4 flex items-center justify-between gap-4">
            <div className="flex items-center justify-center text-white">
              <img
                src="../../src/assets/bg-2.jpg"
                className="h-10 w-10 mr-4 object-cover rounded-full"
                alt=""
              />
              <span className="flex flex-col">
                <p className="text-xs font-medium">Alexander Arnold</p>
                <p className="text-xs font-medium">alexarnol@gmail.com</p>
              </span>
            </div>
            <span className="px-4 py-1 text-xs bg-green-400 font-semibold rounded-md">
              Free
            </span>
          </div>
          <button className="mt-8 mb-2 p-2 text-sm text-white font-semibold rounded-lg outline outline-2 outline-neutral-500 hover:bg-neutral-600 hover:outline-none transition ease-in-out duration-300 delay-75 hover:scale-95">
            Upgrade To Pro
          </button>
        </div>
        <div className="py-2 mt-4 flex items-center justify-evenly rounded-xl bg-neutral-800">
          <button className="group flex items-center justify-center px-6 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-yellow-500 ">
            <IoMdSunny className="text-2xl text-gray-600 group-hover:text-orange-500" />
            <p className="ml-2 font-semibold text-gray-600 group-hover:text-orange-500">
              Light
            </p>
          </button>
          <button className="group flex items-center justify-center px-6 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-300">
            <IoMdMoon className="text-2xl text-gray-600 group-hover:text-gray-300" />
            <p className="ml-2 font-semibold text-gray-600 group-hover:text-gray-300">
              Dark
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
