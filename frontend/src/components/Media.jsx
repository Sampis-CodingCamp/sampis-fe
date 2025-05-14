import React from "react";
import { assets } from "../assets/assets";

const Media = () => {
  return (
    <div className="w-full ">
      <div className="mx-auto bg-[#F9FAFB] flex justify-center py-10">
        <img className="w-40 h-12  mr-10" src={assets.dbs_logo} alt="" />
        <img className="w-40 h-12  " src={assets.dicoding_logo} alt="" />
      </div>
    </div>
  );
};

export default Media;
