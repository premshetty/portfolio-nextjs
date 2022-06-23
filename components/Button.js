import React from "react";

function Button({ buttonName }) {
  return (
    <button className="border-[1px] hover:bg-[#FF31AD24] text-cta font-bold tracking-[0.15rem] text-sm leading-[19px] border-cta rounded-[5px] w-[132px] h-[47px]">
      {buttonName}
    </button>
  );
}

export default Button;
