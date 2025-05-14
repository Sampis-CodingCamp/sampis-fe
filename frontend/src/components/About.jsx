import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className='className="relative z-10 mx-4 sm:mx-[8%]"'>
      <div class="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div class="max-w-lg md:max-w-none" id="#about">
              <span class="inline-flex items-center justify-center rounded-full bg-green-apple px-2.5 py-0.5 text-emerald-700 ">
                <p class="text-sm whitespace-nowrap">Tentang Kami</p>
              </span>
              <h2 class="text-5xl font-bold text-hitam-manja sm:text-3xl my-5">
                Apaa itu Sampis?
              </h2>

              <p class=" text-gray-700">
                Sampis adalah organisasi yang berkomitmen untuk melestarikan lingkungan dan meningkatkan kesadaran tentang pentingnya pelestarian alam. Melalui berbagai inisiatif dan program, kami <br/>bertujuan untuk menciptakan perubahan positif dalam <br/> lingkungan dan masyarakat
              </p>
            </div>
          </div>

          <div>
            <img
              src={assets.about_img}
              className="w-full rounded object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
