import React from "react";
import { assets } from "../assets/assets";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";


const Header = () => {

  const navigate = useNavigate();

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.header_img})` }}
    >
      
      {/* <div className="absolute inset-0 bg-gray-700 opacity-50"></div> */}
      <div className="absolute inset-0 bg-black/45"></div>

      <div className="relative z-10 mx-4 sm:mx-[8%]">
        <Navbar />

        <div className="flex flex-col md:flex-row flex-wrap">
          {/* {left site} */}
          <div className="md:w-1/2 flex flex-col items-start justify-center gap-10 py-10 m-auto md:py-[5vw] md:mb-[-30px]">
            <p className="text-3xl md:text-4xl lg:text-5xl  text-primary font-semibold leading-tight md:leading-tight lg:leading-tight">
              Sampahmu Tanggung <br /> Jawabmu
            </p>
            <div className="flex flex-col md:flex-row items-center gap-3 text-primary text-sm font-light">
              <p>
                Selamat datang di Sampis! Bergabunglah bersama{" "}
                <br className="hidden sm:block" />
                kami. Deteksi Sampahmu dengan menekan tombol!
              </p>
            </div>
            <button
              className="rounded-lg hover:bg-[#BF9264] bg-orange-400 px-16 py-5 text-sm font-medium text-primary hover:scale-105 transition-all duration-300"
              onClick={() => navigate('/scanTrash')}
            >
              Deteksi <img className="w-3" alt="" />
            </button>
          </div>

          
          <div className="md:w-1/2 relative"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
