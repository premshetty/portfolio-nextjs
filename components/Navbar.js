import React from "react";
import Home from "../pages/index";
import Button from "./Button";

function Navbar() {
  return (
    <div className="flex justify-between  p-5">
      <div></div>
      <div className="flex gap-12 items-center text-[white] ">
        <a className="hover:text-cta" href="#">
          HOME
        </a>
        <a className="hover:text-cta" href="#">
          ABOUT
        </a>
        <a className="hover:text-cta" href="#">
          PROJECTS
        </a>
        <a className="hover:text-cta" href="#">
          CONTACT
        </a>
        <Button buttonName="RESUME" />
      </div>
    </div>
  );
}

export default Navbar;
