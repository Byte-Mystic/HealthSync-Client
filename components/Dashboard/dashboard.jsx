import React from "react";
import Main from "../LeftSideBar/main";
import ChatHistory from "../Chats/chatHistory";
import { FaGripLines } from "react-icons/fa6";
import Chat from "../Chats/chat";

// const Dashboard = () => {
//   return (
//     // Layout
//     <div className="h-screen w-screen flex bg-neutral-900">
//       {/* Leftside bar */}
//       <Main className="w-1/4" />

//       {/* Middle Section */}
//       <div className="w-3/4 my-6 flex rounded-2xl bg-neutral-800">
//         {/* Chat Section */}
//         <div className="w-full border-r border-r-neutral-700"></div>

//         {/* Chat History & Logout */}
//         <div className="w-96 flex flex-col">
//           <div className="h-20 px-4 flex items-center justify-between border-b border-b-neutral-700">
//             <img
//               src="../../src/assets/bg-2.jpg"
//               className="h-10 w-10 object-cover rounded-full"
//               alt=""
//             />
//             <MdLogout className="text-xl text-neutral-200 transition ease-in-out duration-300 delay-75 hover:text-neutral-400 hover:scale-95 cursor-pointer" />
//           </div>
//           <ChatHistory />
//         </div>
//       </div>
//     </div>
//   );
// };

const Dashboard = () => {
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
        <div className="width-30 h-full py-6 flex flex-col border-l border-neutral-600 max-lg:hidden">
          <div className="h-12 flex items-center justify-between">
            {/* <img
              src="../../src/assets/bg-2.jpg"
              alt=""
              className="h-10 w-10 rounded-full object-cover"
            />*/}
          </div>
          <ChatHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
