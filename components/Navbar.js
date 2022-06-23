import React from "react";
import Home from "../pages/index";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex justify-between  p-5">
      <div></div>
      <div className="flex gap-12 items-center text-[white] ">
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">PROJECTS</a>
        <a href="#">CONTACT</a>
        <Button buttonName="RESUME" />
      </div>
    </div>
  );
}

export default Navbar;
