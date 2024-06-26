import React, {useState, useEffect} from "react";
import Main from "../LeftSideBar/main";
import { FaGripLines } from "react-icons/fa6";
import DragDrop from "../Drag-n-Drop/dragDrop";
import ReportHistory from "./reportHistory";
import {useSelector} from "react-redux"

const MedicalReport = () => {

  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false)

  const handleDrop = async (acceptedFiles) => {
    setLoading(true);
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch("/api/oct/uploadimage/", {
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
        <div className="width-70 flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl font-semibold text-white">Oct [Optical Coherence]</h1>
          <DragDrop onDrop={handleDrop} loading={loading} />
        </div>
        {loading && <div className="overlay overlay-hidden">
          <h1>Loading...</h1></div>}
        <div className="width-30 h-full py-6 flex flex-col border-l border-neutral-600 max-lg:hidden">
          <ReportHistory loading={loading} />
        </div>
      </div>
    </div>
  );
};

export default MedicalReport;
