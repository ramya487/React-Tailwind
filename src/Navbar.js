import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleNav  = () => {
        setNav(!nav);
    }
  return (
    <div className="text-white max-w-[1240px] flex mx-auto justify-between px-4 items-center h-24">
      <h1 className="text-3xl font-bold text-[#40F8FF] uppercase cursor-pointer">React</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#40F8FF] cursor-pointer">Home</li>
        <li className="p-4 hover:text-[#40F8FF] cursor-pointer">Company</li>
        <li className="p-4 hover:text-[#40F8FF] cursor-pointer">Resources</li>
        <li className="p-4 hover:text-[#40F8FF] cursor-pointer">About</li>
        <li className="p-4 hover:text-[#40F8FF] cursor-pointer">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
      {nav ? <IoClose size={30}/> : <IoMenuOutline size={30}/>}
      </div>
      <div className={nav ? "fixed left-0 top-0 w-[60%] h-[100%] border-r border-r-gray-600 bg-black ease-in-out duration-500" : "fixed left-[-100%] ease-in-out duration-500"}>
      <h1 className="text-3xl font-bold text-[#40F8FF] uppercase m-4">React</h1>
        <ul className="uppercase m-4">
        <li className="p-4 border-b border-b-gray-500">Home</li>
        <li className="p-4 border-b border-b-gray-400">Company</li>
        <li className="p-4 border-b border-b-gray-400">Resources</li>
        <li className="p-4 border-b border-b-gray-400">About</li>
        <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
