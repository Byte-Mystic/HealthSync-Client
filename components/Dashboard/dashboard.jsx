import React, { useState } from "react";
import Main from "../LeftSideBar/main";
import ChatHistory from "../Chats/chatHistory";
import { FaGripLines } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import Chat from "../Chats/chat";
import UserSettings from "../UserSettings/userSettings";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);

  const togglePopup = () => {
    setVisible(!visible);
  };

  return (
    <div className="h-screen w-screen p-6 md:flex md:gap-4 max-md:p-0 bg-neutral-900">
      {/* LeftSideBar */}
      <div className="width-10 h-full max-md:hidden xl:w-1/5">
        <Main />
      </div>
      {/* Chat */}
      <div className="width-90 h-full p-8 flex flex-col gap-8 bg-neutral-800 rounded-2xl max-md:w-full max-md:rounded-none xl:w-4/5 lg:flex-row lg:gap-0 lg:p-0">
        <span className="flex items-center justify-end lg:hidden">
          <FaGripLines className="text-2xl text-gray-500" />
        </span>
        <Chat />
        <div className="width-30 h-full pb-6 flex flex-col border-l border-neutral-600 max-lg:hidden">
          <div className="h-16 p-6 flex items-center justify-end gap-10 relative">
            <img
              src="../../src/assets/bg-2.jpg"
              alt=""
              className="h-8 w-8 rounded-full object-cover cursor-pointer"
              onClick={togglePopup}
            />
            {visible && <UserSettings />}
            <IoIosLogOut className="text-2xl text-white transition ease-in-out duration-300 cursor-pointer hover:scale-95 hover:text-gray-400" />
          </div>
          <ChatHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
