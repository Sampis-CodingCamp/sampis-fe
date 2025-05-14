// ImageUpload.js
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import DetectedResult from "./DetectResult";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [detectedTrash, setDetectedTrash] = useState({
    type: "",
    usage: "",
  });

  const webcamRef = useRef(null);
  const fileInputRef = useRef();

const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith("image/")) {
    setShowResult(false);
    setImage({
      file,
      url: URL.createObjectURL(file),
    });
  }
};

const capturePhoto = () => {
  const imageSrc = webcamRef.current.getScreenshot();
  setImage({
    file: null,
    url: imageSrc,
  });
  setShowResult(false); 

 
  setTimeout(() => {
    setShowCamera(false);
  }, 500); 
};


  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleDetect = () => {
    if (image) {
      setDetectedTrash({
        type: "Botol Plastik",
        usage:
          "Botol plastik dapat digunakan kembali sebagai pot tanaman, wadah alat tulis, atau dikumpulkan untuk didaur ulang menjadi produk baru.",
      });
      setShowResult(true);
    } else {
      alert("Silakan unggah atau ambil foto terlebih dahulu.");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-left text-sm font-semibold mb-2">Tambah foto</h2>

      <div className="border-2 border-dashed border-[#8F8F8F] rounded-md p-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div
            onClick={handleUploadClick}
            className="flex-1 bg-white border border-[#CCCCCC] rounded-md py-10 flex flex-col items-center justify-center cursor-pointer"
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={fileInputRef}
              className="hidden"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 mb-2 text-[#27667B]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16l4-4m0 0l4 4m-4-4v12"
              />
            </svg>
            <p className="font-medium text-sm text-[#8F8F8F]">Pilih Foto</p>
          </div>

          <div
            onClick={() => setShowCamera(true)}
            className="flex-1 bg-white border border-[#CCCCCC] rounded-md py-10 flex flex-col items-center justify-center cursor-pointer"
          >
            {!showCamera ? (
              <button className="text-[#27667B] font-medium text-sm hover:underline flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7h2l2-3h10l2 3h2a2 2 0 012 2v9a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2z"
                  />
                  <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth={2} />
                </svg>
                Buka Kamera
              </button>
            ) : (
              <>
                <Webcam
                  audio={false}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  className="rounded mb-5 px-5"
                />
                <button
                  onClick={capturePhoto}
                  className="bg-[#27667B] text-white px-4 py-1 rounded hover:scale-105 transition"
                >
                  Ambil Foto
                </button>
              </>
            )}
          </div>
        </div>

        {image && (
          <div className="mt-4">
            <img
              src={image.url}
              alt="Preview"
              className="w-full max-h-[300px] object-contain rounded"
            />
            {image.file && (
              <p className="text-sm mt-2 text-left text-gray-600">{image.file.name}</p>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-end my-6">
        <button
          onClick={handleDetect}
          className="hover:bg-[#BF9264] bg-orange-400 text-white font-medium px-6 py-2 rounded hover:scale-105 transition"
        >
          Deteksi
        </button>
      </div>

      {showResult && <DetectedResult image={image.url} result={detectedTrash} />}
    </div>
  );
};

export default ImageUpload;
