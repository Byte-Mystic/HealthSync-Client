import React, { useCallback, useMemo } from "react";
import { useDropzone } from "react-dropzone";
import { FaUpload } from "react-icons/fa";

const baseStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  borderWidth: 2,
  borderRadius: 8,
  borderColor: "#cccccc",
  borderStyle: "dashed",
  backgroundColor: "#f5f5f5",
  color: "#a4a4a4",
  transition: "border .3s ease-in-out",
  margin: "auto"
};

const activeStyle = {
  borderColor: "#2196f3",
};

const acceptStyle = {
  borderColor: "#00e676",
};

const rejectStyle = {
  borderColor: "#ff1744",
};

const DragDrop= ({onDrop, loading}) => {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png",
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isDragActive ? activeStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
      width: "80%",
      height: "400px",
      margin: "auto",
      cursor: "pointer",
    }),
    [isDragActive, isDragReject, isDragAccept],
  );

  return (
    <div>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        {isDragAccept
          ? (
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>
              Drop your images here.
            </p>
          )
          : (
            <p className="flex flex-col items-center justify-center" style={{ fontSize: "24px", fontWeight: "bold" }}>
              <FaUpload
                size={80}
              />
              <span>Drag and drop your images here or click to browse.</span>
            </p>
          )}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default DragDrop;