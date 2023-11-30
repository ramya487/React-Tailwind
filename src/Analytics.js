import React from "react";
import Laptop from "./assets/laptop.jpg";
const x = () => {
  return (
    <div className="bg-white w-full py-5 px-4">
      <div className="grid mx-auto md:grid-cols-2 gap-7">
        <img src={Laptop} alt="Laptop" />
        <div className="flex flex-col justify-center items-start gap-2">
          <p className="text-[#40F8FF] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="text-2xl font-bold">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting.
          </p>
          <div className=" self-center md:self-start">
            <button className="text-[#40F8FF] py-2 px-4 bg-black rounded my-4 hover:bg-slate-400 hover:text-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default x;
