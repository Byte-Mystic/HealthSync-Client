import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Moment from 'react-moment';

const ReportHistory = ({ loading }) => {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/mammo/all-images", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${currentUser.access}`,
        },
      });
      const data = await response.json();
      setdata(data);
    };
    fetchData();
  }, [loading]);

  return (
    <div className="px-8 flex flex-col gap-6 overflow-y-scroll">
      <span className="flex items-center justify-between">
      <h1 className="text-xl font-bold text-slate-300 capitalize tracking-wider">
        Report Results.
      </h1>
      <p className="text-xs px-2 py-1 bg-slate-500 rounded-md text-white font-semibold">{data.length}</p>
      </span>
      {data?.map((item, index) => (
        <div className="h-1/3 flex flex-col items-start justify-start gap-1" key={index}>
          <img
            src={item.image}
            alt=""
            className="mb-2 h-3/4 w-full object-contain rounded-lg"
          />
            <span className="w-full flex items-center justify-between">
              <span className="flex items-center justify-center gap-4">
              <h1 className="text-white text-sm">ID:</h1>
              <h1 className="text-white font-semibold">{item.user_mammo_id}</h1>
              </span>
              <span className="flex items-center justify-center gap-4">
              <h1 className="text-white text-sm">Result:</h1>
              <h1 className="text-white font-semibold">{item.result}</h1>
              </span>
            </span>
              <h1 className="font-medium text-slate-400 text-xs italic" >Timestamp: <Moment format="hh:mm:ss">{item.created_at}</Moment></h1>
        </div>
      ))}
    </div>
  );
};

export default ReportHistory;
