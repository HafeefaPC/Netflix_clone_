import React from "react";
import netflix from "../assets/netflix.png";
import Button from "./Button";

function Header() {
  return (
    <div className="flex justify-between">
      <img src={netflix} className="w-[11rem] px-8  " />
      <div className="flex gap-4  px-4 py-8 ">
        <select className="bg-red-500 p-1 text-white h-max rounded-lg">
          <option className="hover:bg-red-500">English</option>
          <option className="hover:bg-red-500">Spanish</option>
        </select>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
