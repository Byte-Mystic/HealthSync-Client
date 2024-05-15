import React from "react";

const UserSettings = () => {
  return (
    <div className="h-28 w-64 p-4 absolute top-14 right-20 flex flex-col bg-neutral-700 rounded-md z-10">
      <div className="flex items-center justify-start gap-4">
        <img
          src="../../src/assets/bg-2.jpg"
          alt=""
          className="h-10 w-10 rounded-full object-cover"
        />
        <span className="flex flex-col">
          <p className="text-xs text-white font-medium">username</p>
          <p className="text-xs text-white font-medium">email</p>
        </span>
      </div>
    </div>
  );
};

export default UserSettings;
