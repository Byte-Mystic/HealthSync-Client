import { useState, useRef } from "react";

const DragDrop = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    setSelectedImage(true);
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    if (index === 0) setSelectedImage(false);
    console.log(index);
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function uploadImage() {
    console.log("Images: ", images);
  }

  return (
    <div className="h-screen px-8 flex flex-col items-center justify-center gap-6 border border-black">
      <div
        className="w-full h-40 px-4 flex justify-center items-center border-2 border-dashed border-sky-600 rounded-md select-none"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className="transition ease-in-out duration-100 font-medium hover:opacity-60">
            Drop Images here
          </span>
        ) : (
          <span className="flex items-center justify-center gap-4">
            <p className="font-medium">Drag & Drop Images here</p>
            <p className="font-medium text-sm text-neutral-500">or</p>
            <span
              className="font-medium transition ease-in-out duration-300 cursor-pointer underline text-purple-800 hover:text-purple-600"
              role="button"
              onClick={selectFiles}
            >
              Browse
            </span>
          </span>
        )}
        <input
          type="file"
          name="file"
          className="hidden"
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </div>
      {selectedImage && (
        <div className="h-28 w-full flex justify-start items-start flex-wrap">
          {images.map((images, index) => (
            <div className="h-24 w-24 mx-2 relative" key={index}>
              <span
                className="z-50 h-7 w-7 text-center rounded-full bg-red-600 text-white absolute -top-2 -right-4 cursor-pointer text-lg font-bold transition ease-in-out duration-300 delay-75 hover:bg-red-500"
                onClick={() => deleteImage(index)}
              >
                &times;
              </span>
              <img
                src={images.url}
                alt={images.name}
                className="object-cover h-full w-full rounded-md border border-black"
              />
            </div>
          ))}
        </div>
      )}
      <button
        type="button"
        onClick={uploadImage}
        className="w-full px-3 py-2 cursor-pointer outline-none bg-sky-500 hover:bg-sky-600 rounded-md text-white font-medium"
      >
        Upload
      </button>
    </div>
  );
};

export default DragDrop;

// <div className="oct-card border-2 border-sky-800 rounded-md shadow-md shadow-gray-500">
//        <div className="top">
//          <p>OCT Image Upload</p>
//        </div>
//        <div
//          className="drag-area"
//          onDragOver={onDragOver}
//          onDragLeave={onDragLeave}
//          onDrop={onDrop}
//        >
//          {isDragging ? (
//            <span className="select">Drop Images here</span>
//          ) : (
//            <>
//              Drag & Drop Image here or
//              <span className="select" role="button" onClick={selectFiles}>
//                Browse
//              </span>
//            </>
//          )}

//          <input
//            type="file"
//            name="file"
//            className="file"
//            multiple
//            ref={fileInputRef}
//            onChange={onFileSelect}
//          />
//        </div>
//        <div className="oct-container">
//          {images.map((images, index) => (
//            <div className="oct-image" key={index}>
//              <span className="delete" onClick={() => deleteImage(index)}>
//                &times;
//              </span>
//              <img src={images.url} alt={images.name} />
//            </div>
//          ))}
//        </div>
//        <button type="button" onClick={uploadImage}>
//          Upload
//        </button>
//      </div>
