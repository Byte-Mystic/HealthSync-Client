import React from "react";
import Main from "../LeftSideBar/main";
import ChatHistory from "../Chats/chatHistory";
import { MdLogout } from "react-icons/md";

const Dashboard = () => {
  return (
    // Layout
    <div className="h-screen w-screen flex bg-neutral-900">
      {/* Leftside bar */}
      <Main className="w-1/4" />

      {/* Middle Section */}
      <div className="w-3/4 my-6 flex rounded-2xl bg-neutral-800">
        {/* Chat Section */}
        <div className="w-full border-r border-r-neutral-700"></div>

        {/* Chat History & Logout */}
        <div className="w-96 flex flex-col">
          <div className="h-20 px-4 flex items-center justify-between border-b border-b-neutral-700">
            <img
              src="../../src/assets/bg-2.jpg"
              className="h-10 w-10 object-cover rounded-full"
              alt=""
            />
            <MdLogout className="text-xl text-neutral-200 transition ease-in-out duration-300 delay-75 hover:text-neutral-400 hover:scale-95 cursor-pointer" />
          </div>
          <ChatHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
