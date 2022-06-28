import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-col w-[52%] pl-[10%] pt-[7%]">
        <p className="text-cta text-[20px]"> Hi , my name is </p>
        <h1 className="text-[72px] font-bold leading-[98px] text-[white] tracking-wider">
          PREM KUMAR S
        </h1>
        <p className="text-[#B0B5BC] text-[30px]">
          I'm a Computer Science Engineer From India , frontend web developer
          with a good UI/UX knowledge can also tweak the server sometimes
        </p>
        <div className="mt-[30px]">
          <Button buttonName="CONTACT" />
        </div>
      </div>
      <div className="flex  justify-end w-[48%]">
        <img
          className="w-full object-cover drop-shadow-[1px_1px_6px_white]"
          src="./myphotos/1.png"
          alt="prem"
        />
      </div>
    </div>
  );
}

export default Hero;
