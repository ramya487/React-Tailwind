import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid md:grid-cols-4 mx-auto md:py-9 md:px-24 p-9 w-full bg-black  text-white gap-5 ">
      <div className="flex flex-col gap-7">
        <div>
          <p className="text-[#40F8FF] font-bold text-2xl">REACT</p>
        </div>
        <div>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. It is a
            long established fact that a reader will be distracted by.
          </p>
        </div>
        <div className="flex gap-7">
          <FaSquareFacebook size={25} className="cursor-pointer hover:fill-[gray]"/>
          <FaInstagram size={25} className="cursor-pointer hover:fill-[gray]"/>
          <BsTwitterX size={25} className="cursor-pointer hover:fill-[gray]"/>
          <FaGithub size={25} className="cursor-pointer hover:fill-[gray]"/>
          <FaDiscord size={25} className="cursor-pointer hover:fill-[gray]"/>
        </div>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <p className="text-[gray]">Solutions</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Analytics</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Marketing</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Commerce</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Insights</p>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <p className="text-[gray]">Solutions</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Analytics</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Marketing</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Commerce</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Insights</p>
      </div>
      <div className="flex flex-col gap-3 md:items-end">
        <p className="text-[gray]">Solutions</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Analytics</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Marketing</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Commerce</p>
        <p className="hover:text-[#40F8FF] cursor-pointer">Insights</p>
      </div>
    </div>
  );
};

export default Footer;
