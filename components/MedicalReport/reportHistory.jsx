import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ReportHistory = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [data, setdata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/oct/all-images", {
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
      <h1 className="text-xl font-bold text-slate-300 capitalize tracking-wider">
        Report Results.
      </h1>
      {data?.map((item, index) => (
        <div className="flex items-start justify-start gap-4" key={index}>
          <img
            src={item.image}
            alt=""
            className="h-14 w-14 object-cover rounded-lg"
          />
          <span className="flex flex-col justify-between">
            <h1 className="font-semibold text-white text-xs">{item.user_mammo_id}</h1>
            <span className="flex flex-col">
              <h1 className="text-slate-400 text-xs">{item.result}</h1>
              <h1 className="text-slate-400 text-xs italic">{item.created_at}</h1>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default ReportHistory;
