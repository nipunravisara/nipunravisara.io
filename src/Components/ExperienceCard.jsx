import React from "react";

const ExperieceCard = ({ designation, company, start, end }) => {
  return (
    <div className="w-max mt-7 md:mt-0">
      <p className="leading-relaxed text-sm md:text-lg font-bold">
        {designation}
      </p>
      <p className="leading-relaxed text-sm md:text-lg font-normal italic">
        {company}
      </p>
      <p className="leading-relaxed text-sm md:text-lg text-gray-500 text-opacity-75">
        {start} - {end}
      </p>
    </div>
  );
};

export default ExperieceCard;
