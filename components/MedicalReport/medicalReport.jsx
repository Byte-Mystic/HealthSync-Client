import React from "react";
import Main from "../LeftSideBar/main";
import { FaGripLines } from "react-icons/fa6";
import DragDrop from "../Drag-n-Drop/dragDrop";
import ReportHistory from "./reportHistory";

const MedicalReport = () => {
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
        <DragDrop />
        <div className="width-30 h-full py-6 flex flex-col border-l border-neutral-600 max-lg:hidden">
          <ReportHistory />
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
