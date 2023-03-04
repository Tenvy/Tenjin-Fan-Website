import React from "react";
import logo from "../assets/scrollworks.png";
import title from "../assets/tenjintxt.png";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <nav className="z-[2] fixed w-screen">
      <div className="flex justify-around py-10 items-center">
        <div className="flex h-10 gap-2 md:h-14">
          <img className="" src={logo} alt="" />
          <img src={title} alt="" />
        </div>
        <div className="font-semibold text-sm md:text-xl ">
          <Link to="product" className="mx-2 hover:text-gray-400 cursor-pointer">
            Products
          </Link>
          <Link to="contact" className="mx-2 hover:text-gray-400 cursor-pointer">
            Contacts
          </Link>
        </div>
      </div>
    </nav>
  );
};
