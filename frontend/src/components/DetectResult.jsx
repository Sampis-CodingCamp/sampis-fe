// DetectedResult.js
import React from "react";
import { useNavigate } from "react-router-dom";

const DetectedResult = ({ image, result }) => {

  const navigate = useNavigate();

  const handleSellClick = () => {


    const isLoggedIn =  false;


    // !!localStorage.getItem("token"); 
    if (isLoggedIn) {
      navigate("/sellTrash" , { state: { jenisSampah: result.type } });
    } else {
      navigate("/login");
    }
  };


  return (
    <div className="border-2 border-dashed border-[#8F8F8F] rounded-md p-6 mt-6">
      <p className="font-semibold mb-2">
        Jenis sampah: <span className="font-normal">{result.type}</span>
      </p>
      <p className="mb-4">Pemanfaatan sampah: {result.usage}</p>
      <img
        src={image}
        alt="Hasil Deteksi"
        className="w-full max-h-[300px] object-contain rounded"
      />
      <div className="flex justify-end mt-6">
        <button onClick={handleSellClick} className="hover:bg-[#BF9264] bg-orange-400 text-white font-medium px-6 py-2 rounded hover:scale-105 transition">
          Jual Sampah
        </button>
      </div>
    </div>
  );
};

export default DetectedResult;
