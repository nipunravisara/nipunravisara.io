import React from "react";

const PortfolioCard = ({ name, description, sourceType, link }) => {
  return (
    <div className="mt-7 md:mt-0">
      <div className="flex items-center justify-between md:justify-start flex-row">
        <p className="leading-relaxed text-sm md:text-lg font-bold">{name}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="leading-relaxed text-sm md:text-lg font-bold ml-4 mb-2 pl-2 pr-2 pt-0.5 border rounded"
        >
          {sourceType}
        </a>
      </div>
      <p className="leading-relaxed text-sm md:text-lg text-gray-500 text-opacity-75">
        {description}
      </p>
    </div>
  );
};

export default PortfolioCard;
