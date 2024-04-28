import React from "react";

const ReportHistory = () => {
  return (
    <div className="px-8 flex flex-col gap-6">
      <h1 className="text-xl font-bold text-slate-300 capitalize tracking-wider">
        Report Results.
      </h1>
      <div className="flex items-start justify-start gap-4">
        <img
          src="../../src/assets/bg-2.jpg"
          alt=""
          className="h-14 w-14 object-cover rounded-lg"
        />
        <span className="flex flex-col justify-between">
          <h1 className="font-semibold text-white text-xs">Patient Name</h1>
          <span className="flex flex-col">
            <h1 className="text-slate-400 text-xs">Report Results</h1>
            <h1 className="text-slate-400 text-xs italic">Report Time</h1>
          </span>
        </span>
      </div>
      <div className="flex items-start justify-start gap-4">
        <img
          src="../../src/assets/bg-2.jpg"
          alt=""
          className="h-14 w-14 object-cover rounded-lg"
        />
        <span className="flex flex-col justify-between">
          <h1 className="font-semibold text-white text-xs">Patient Name</h1>
          <span className="flex flex-col">
            <h1 className="text-slate-400 text-xs">Report Results</h1>
            <h1 className="text-slate-400 text-xs italic">Report Time</h1>
          </span>
        </span>
      </div>
      <div className="flex items-start justify-start gap-4">
        <img
          src="../../src/assets/bg-2.jpg"
          alt=""
          className="h-14 w-14 object-cover rounded-lg"
        />
        <span className="flex flex-col justify-between">
          <h1 className="font-semibold text-white text-xs">Patient Name</h1>
          <span className="flex flex-col">
            <h1 className="text-slate-400 text-xs">Report Results</h1>
            <h1 className="text-slate-400 text-xs italic">Report Time</h1>
          </span>
        </span>
      </div>
    </div>
  );
};

export default ReportHistory;
