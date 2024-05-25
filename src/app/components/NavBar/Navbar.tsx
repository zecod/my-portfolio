import React from "react";
import SVGlogo from "../assets/logo.svg";
import { SheetSide } from "./Sheet";

const Navbar = () => {
  return (
    <div className="container w-full py-4 flex items-center justify-between jersey-10-regular ">
      <div className="flex items-center">
        <h1 className="text-4xl font-extrabold">Yass.</h1>
      </div>
      <ul className="hidden md:flex flex gap-5 items-center text-lg">
        <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
          HOW WE CAN HELP?
        </li>
        <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
          PROJECTS
        </li>
        <li className="cursor-pointer transition-all hover:text-zinc-400 hover:text-xl">
          ABOUT ME
        </li>
        <li className="bg-black text-white py-2 px-6 rounded-full cursor-pointer transition-all hover:bg-zinc-700">
          CONTACT
        </li>
      </ul>

      <div className="md:hidden">
        <SheetSide />
      </div>
    </div>
  );
};

export default Navbar;
