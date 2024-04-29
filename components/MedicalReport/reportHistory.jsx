import React from "react";

const ReportHistory = () => {
  return (
    <div className="px-8 flex flex-col gap-6">
      <h1 className="text-xl font-bold text-slate-300 capitalize tracking-wider">
        Report Results.
      </h1>
      <div className="h-1/3 flex flex-col items-start justify-start gap-1">
        <img
          src="../../src/assets/bg-2.jpg"
          alt=""
          className="mb-2 h-3/4 w-full object-cover rounded-lg"
        />
          <span className="w-full flex items-center justify-between">
            <h1 className="text-slate-400 text-xs">Patient ID</h1>
            <h1 className="text-slate-400 text-xs ">Result</h1>
          </span>
          <h1 className="font-medium text-slate-400 text-xs italic" >time</h1>
      </div>
    </div>
  );
};

export default ReportHistory;
