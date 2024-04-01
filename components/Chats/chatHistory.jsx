import { useState } from "react";
import { RiDeleteBin5Line, RiAddFill } from "react-icons/ri";

// const ChatHistory = () => {
//   return (
//     <div className="h-full pt-2 pb-6 px-4 flex flex-col justify-between">
//       <div className="h-3/4 flex flex-col">
//         <div className="h-1/5 flex items-center justify-between">
//           <span className="flex items-center justify-center">
//             <p className="text-xs font-medium text-neutral-500">Chat history</p>
//             <span className="ml-2 px-2 py-1 text-xs rounded-xl bg-neutral-700 text-neutral-400">
//               25/100
//             </span>
//           </span>
//           <RiDeleteBin4Line className="text-xl text-neutral-500 transition ease-in-out duration-300 delay-75 hover:text-red-600 cursor-pointer" />
//         </div>
//         <div className="h-4/5"></div>
//       </div>
//       <button className="p-2 flex items-center justify-center bg-sky-500 rounded-lg transition ease-in-out duration-300 delay-75 hover:bg-sky-600 ">
//         <RiAddFill className="text-lg text-white" />
//         <p className="ml-2 font-medium text-sm text-white">New Chat</p>
//       </button>
//     </div>
//   );
// };

const ChatHistory = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheck = (e) => {
    setIsSelected(e.target.checked);
  };

  return (
    <div className="h-full w-full pt-6 px-6 flex flex-col border-t border-neutral-600">
      <div className="flex items-center justify-between">
        <span className="flex items-center justify-between gap-2">
          <p className="font-medium text-sm text-neutral-500">Chat history</p>
          <p className="py-1 px-2 font-medium rounded-2xl text-xs text-gray-300 bg-neutral-600">
            25/100
          </p>
        </span>
        <RiDeleteBin5Line className="text-xl text-neutral-500 transition ease-in-out duration-300 delay-75 hover:text-red-600 cursor-pointer" />
      </div>
      <div className="h-96 my-4 flex flex-col items-center gap-4 overflow-y-scroll scrollbar-none">
        <div className="flex items-center justify-center gap-2">
          <label className="self-start">
            <input
              type="checkbox"
              name=""
              id=""
              checked={isSelected}
              onChange={handleCheck}
            />
          </label>
          <span
            className={`text-xs font-medium transition ease-in-out duration-300 delay-75 ${
              isSelected ? "text-neutral-600" : "text-neutral-300"
            }`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            cumque.
          </span>
        </div>
      </div>
      <button className="p-3 flex items-center justify-center bg-sky-500 rounded-lg transition ease-in-out duration-300 delay-75 hover:bg-sky-700">
        <RiAddFill className="text-lg text-white" />
        <p className="ml-2 font-medium text-sm text-white">New Chat</p>
      </button>
    </div>
  );
};

export default ChatHistory;
