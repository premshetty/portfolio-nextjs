import React from "react";
import Skill from "./Skill";
function About() {
  return (
    <div
      className="flex h-[100vh] bg-cover bg-no-repeat bg-opacity-10 bg-darkbg  px-20 gap-20 mt-4"
      style={{
        backgroundColor: "white",
        backgroundImage: 'url("./knowledge.avif")',
      }}
    >
      <div className="flex flex-col max-w-[50%] pt-[7%]">
        <h1 className="h-[1px]  w-full bg-cta opacity-70"></h1>
        <h1 className="text-[30px] mt-10 font-bold leading-[98px] text-[white] tracking-wider">
          About me
        </h1>
        <p className="text-[#B0B5BC] text-[20px]">
          A computer Science Engineer guy who is intrested in Web and BlockChain
          Technology , Creative expression is what lights me up, and I'm always
          open to learning and adapting new Technologies.
        </p>
        <div className="mt-[30px]"></div>
      </div>
      <div className="flex flex-col  pt-[7%] bg-opacity-30">
        <h1 className="h-[1px]  w-full bg-cta opacity-70"></h1>
        <h1 className="text-[30px] mt-10 font-bold leading-[98px] text-[white] tracking-wider">
          Languages :
        </h1>
        <div className="flex gap-3 flex-wrap">
          <Skill image="./lang/html.png" name="HTML" />
          <Skill image="./lang/css.webp" name="CSS" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
        </div>
        <h1 className="text-[30px] mt-10 font-bold leading-[98px] text-[white] tracking-wider">
          Tools :
        </h1>
        <div className="flex gap-3 flex-wrap">
          <Skill image="./lang/html.png" name="HTML" />
          <Skill image="./lang/css.webp" name="CSS" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
          <Skill image="./lang/javascript.png" name="JavaScript" />
        </div>
        <div className="mt-[30px]"></div>
      </div>
    </div>
  );
}

export default About;
