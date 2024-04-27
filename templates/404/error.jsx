// const Error = () => {
//   return (
//     <div className="h-screen flex overflow-hidden px-16">
//       <div className="w-1/2 flex flex-col items-start justify-center gap-8">
//         <div className="flex flex-col mr-8">
//           <h1 className="text-5xl font-bold max-lg:text-4xl">Ooops!</h1>
//           <p className="text-4xl font-bold max-lg:text-3xl">
//             We couldn't find that page.
//           </p>
//         </div>
//         <div className="flex flex-col gap-2 items-start">
//           <p className="text-xl font-semibold">
//             Maybe you can find what you need here?
//           </p>
//           <span className="flex items-center justify-center gap-2">
//             <p className="px-4 py-1 font-bold transititon ease-in duration-300 cursor-pointer bg-lime-300 shadow-md shadow-lime-300 rounded-full hover:scale-95">
//               Dashboard
//             </p>
//             <p className="px-4 py-1 font-bold transititon ease-in duration-300 cursor-pointer bg-cyan-300 shadow-md shadow-cyan-300 rounded-full hover:scale-95">
//               Chats
//             </p>
//             <p className="px-4 py-1 font-bold transititon ease-in duration-300 cursor-pointer bg-purple-300 shadow-md shadow-purple-300 rounded-full hover:scale-95">
//               Settings
//             </p>
//           </span>
//         </div>
//       </div>
//       <div className="w-1/2">
//         <img
//           src="../../src/assets/404.png"
//           alt=""
//           className="h-full object-cover scale-150 mt-16 ml-8 max-lg:scale-125"
//         />
//       </div>
//     </div>
//   );
// };

// export default Error;

const error = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center px-8">
      <div className="w-1/2 mr-12">
        <img
          src="../../src/assets/404.png"
          alt=""
          className="h-full object-contain scale-125"
        />
      </div>
      <div className="w-1/2 flex flex-col items-start justify-center gap-8">
        <div className="flex flex-col mr-8">
          <h1 className="text-5xl font-bold max-lg:text-4xl">Ooops!</h1>
          <p className="text-4xl font-bold max-lg:text-3xl">
            We couldn't find that page.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <p className="text-xl font-semibold max-lg:text-lg">
            Maybe you can find what you need here?
          </p>
          <span className="flex items-center justify-center gap-2">
            <p className="px-4 py-1 font-bold transititon ease-in duration-300 cursor-pointer bg-lime-300 shadow-md shadow-lime-300 rounded-full hover:scale-95">
              Dashboard
            </p>
            <p className="px-4 py-1 font-bold transititon ease-in duration-300 cursor-pointer bg-cyan-300 shadow-md shadow-cyan-300 rounded-full hover:scale-95">
              Chats
            </p>
            <p className="px-4 py-1 font-bold transititon ease-in duration-300 cursor-pointer bg-purple-300 shadow-md shadow-purple-300 rounded-full hover:scale-95">
              Settings
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default error;
