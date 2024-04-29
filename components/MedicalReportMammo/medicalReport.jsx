import React from "react";
import { useState } from "react";
import Main from "../LeftSideBar/main";
import { FaGripLines } from "react-icons/fa6";
import DragDrop from "../Drag-n-Drop/dragDrop";
import ReportHistory from "./reportHistory";
import {useSelector} from "react-redux"

const MammoDashboard = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState(null)

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red"
  }

  const handleDrop = async (acceptedFiles) => {
    setLoading(true);
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/mammo/uploadimage/", {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${currentUser.access}`,
        },
      });

      if (response.ok) {
        const result = await response.json();
        setResponse(result);
      } else {
        const error = await response.json();
        setResponse(error);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen p-6 md:flex md:gap-4 max-md:p-0 bg-neutral-900">
      <div className="width-10 h-full max-md:hidden xl:w-1/5">
        <Main />
      </div>
      <div className="width-90 h-full p-8 flex flex-col gap-8 bg-neutral-800 rounded-2xl max-md:w-full max-md:rounded-none xl:w-4/5 lg:flex-row lg:gap-0 lg:p-0">
        <span className="flex items-center justify-end lg:hidden">
          <FaGripLines className="text-2xl text-gray-500" />
        </span>
        <span>
          <h1>MammoGraphy</h1>
        </span>
        <DragDrop onDrop={handleDrop} loading={loading}/>
        {loading && <div className="overlay overlay-hidden">
          <h1>Loading...</h1></div>}
        <div className="width-30 h-full py-6 flex flex-col border-l border-neutral-600 max-lg:hidden">
          <ReportHistory loading={loading}/>
        </div>
      </div>
    </div>
  );
};

export default MammoDashboard;
