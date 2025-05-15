import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className="py-16 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="mb-10 w-full self-center px-4 text-center lg:w-1/2 lg:text-start">
            <div className="mb-4 inline-block rounded-md bg-green-100 p-2">
              <p className="text-xs font-bold text-green-900">TENTANG KAMI</p>
            </div>
            <p className="mb-4 text-5xl font-bold text-ink">
              Siapa itu Sampis?
            </p>
            <p className="mb-4 text-lg font-extralight text-wolf">
              Sampis adalah organisasi yang berkomitmen untuk melestarikan
              lingkungan dan meningkatkan kesadaran tentang pentingnya
              pelestarian alam. Melalui berbagai inisiatif dan program, kami
              bertujuan untuk menciptakan perubahan positif dalam lingkungan dan
              masyarakat
            </p>
          </div>
          <div className="mt-8 flex w-full self-center px-5 lg:w-1/2">
            <div className="grid grid-cols-3 gap-4 rounded-md">
              <img
                className="h-full rounded-md"
                src={assets.about_img}
                alt=""
              />
              <img
                className="-mt-8 h-full rounded-md"
                src="https://images.unsplash.com/photo-1603139793104-5e880b142e4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <img
                className="h-full rounded-md"
                src="https://images.unsplash.com/photo-1548430065-53c58a6582dd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
