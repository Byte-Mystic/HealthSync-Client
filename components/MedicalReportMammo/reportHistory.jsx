import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ReportHistory = ({ loading }) => {
  const current = new Date();
  const { currentUser } = useSelector((state) => state.user);
  const [data, setdata] = useState([]);
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekday[current.getDay()];
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
    <div className="px-8 flex flex-col gap-6">
      {console.log(data)}
      <h1 className="text-xl font-bold text-slate-300 capitalize tracking-wider">
        Report Results.
      </h1>
      {data?.map((item, index) => (
        <div className="h-1/3 flex flex-col items-start justify-start gap-1" key={index}>
          <img
            src={item.image}
            alt=""
            className="mb-2 h-3/4 w-full object-cover rounded-lg"
          />
            <span className="w-full flex items-center justify-between">
            <h1 className="text-slate-400 text-xs">{item.user_mammo_id}</h1>
              <h1 className="text-slate-400 text-xs">{item.result}</h1>
            </span>
              <h1 className="font-medium text-slate-400 text-xs italic" >{item.created_at}</h1>
        </div>
      ))}
    </div>
  );
};

export default ReportHistory;