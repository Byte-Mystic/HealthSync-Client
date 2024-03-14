import React from "react";
import { RiDeleteBin4Line, RiAddFill } from "react-icons/ri";

const ChatHistory = () => {
  return (
    <div className="h-full pt-2 pb-6 px-4 flex flex-col justify-between">
      <div className="h-3/4 flex flex-col">
        <div className="h-1/5 flex items-center justify-between">
          <span className="flex items-center justify-center">
            <p className="text-xs font-medium text-neutral-500">Chat history</p>
            <span className="ml-2 px-2 py-1 text-xs rounded-xl bg-neutral-700 text-neutral-400">
              25/100
            </span>
          </span>
          <RiDeleteBin4Line className="text-xl text-neutral-500 transition ease-in-out duration-300 delay-75 hover:text-red-600 cursor-pointer" />
        </div>
        <div className="h-4/5"></div>
      </div>
      <button className="p-2 flex items-center justify-center bg-sky-500 rounded-lg transition ease-in-out duration-300 delay-75 hover:bg-sky-600 ">
        <RiAddFill className="text-lg text-white" />
        <p className="ml-2 font-medium text-sm text-white">New Chat</p>
      </button>
    </div>
  );
};

export default ChatHistory;
