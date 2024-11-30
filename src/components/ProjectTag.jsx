import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-customGreen-200 text-white"
    : "border-slate-600 text-[#ADB7BE] hover:border-white";
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-5 py-2 text-xl cursor-pointer`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
