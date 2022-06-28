import React from "react";

function Skill({ image, name }) {
  return (
    <div className="h-[40px] flex items-center gap-3  border-cta border-[2px] rounded-[8px] w-[150px]">
      <img
        src={image}
        className="h-full bg-[white] rounded-l-[6px] object-cover w-[40px]"
        alt=""
      />
      <p className="text-[20px] text-[white] font-bold"> {name}</p>
    </div>
  );
}

export default Skill;
