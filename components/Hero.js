import React from "react";
import Button from "./Button";

function Hero() {
  return (
    <div className="flex flex-col w-[52%] pl-[10%] pt-[7%]">
      <p className="text-cta text-[20px]"> Hi , my name is </p>
      <h1 className="text-[72px] font-bold leading-[98px] text-[white] tracking-wider">
        PREM KUMAR S
      </h1>
      <p className="text-[#B0B5BC] text-[30px]">
        I'm a Computer Science student currently focusing in building and
        designing digital experiences.
      </p>
      <div className="mt-[30px]">
        <Button buttonName="CONTACT" />
      </div>
    </div>
  );
}

export default Hero;
