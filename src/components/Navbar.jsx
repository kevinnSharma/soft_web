import React from "react";

import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const MenuItem = ({ children }) => (
  <div className="flex gap-2 items-center cursor-pointer hover:text-sky-500 transition">
    {children}
    <FaAngleDown />
  </div>
);

const Navbar = () => {
  return (
    <div className="bg-transparent absolute w-screen pt-5 ">
      {/* Navbar */}
      <div id="navbar" className="flex justify-between items-center w-full h-20 px-20 py-7">
        {/* Logo */}
        <div className="w-52 uppercase">
          <img
            src="https://mir-s3-cdn-cf.behance.net/user/276/37d611604564039.60c9b6a4905bc.png"
            alt="Logo"
          />{" "}
        </div>

        {/* Menu */}
        <div
          id="menu"
          className="hidden lg:flex font-medium pl-72  text-white text-lg gap-7 uppercase"
        >
          {[
            "Agency",
            "Services",
            "Digital Services",
            "Solutions",
            "Clone App",
            "Our Work",
          ].map((item) => (
            <MenuItem key={item}>{item}</MenuItem>
          ))}
        </div>

        {/* Contact Button */}
        <div>
          <button className="font-normal text-2xl bg-sky-700 text-white px-4 py-2 lg:px-5 lg:py-3 rounded hover:bg-sky-800 transition">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



{/* Breadcrumb
<div id="breadcrumb" className="flex px-20 py-4 gap-4 text-lg text-white">
  <div className="flex gap-1 items-center">
    Home
    <FaAngleRight />
  </div>
  <div className="flex gap-1 items-center">
    Mobile App Development Company
    <FaAngleRight />
  </div>
</div> */}