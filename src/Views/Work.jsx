import React from "react";
import PortfolioCard from "../Components/PortfolioCard";

const Work = () => {
  return (
    <>
      <div className="pt-28 md:pt-48">
        <p className="text-base uppercase tracking-widest text-gray-400 mb-2 md:mb-10">
          Work
        </p>
        <div className="ml-1 md:ml-8">
          <h1 className="text-6xl md:text-9xl font-black">Portfolio</h1>
        </div>

        <div className="pt-6 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-1 grid-rows-1 md:grid-rows-2">
            <PortfolioCard
              name="Calendarview date-picker"
              description="Simple and hightly custamizable calendar type date picker for react native."
              sourceType="npm"
              link="https://github.com/nipunravisara/react-native-calendarview-datepicker"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2">
            <PortfolioCard
              name="Encipher"
              description="Encipher is a simple File encryption commad-line tool written in python."
              sourceType="github"
              link="https://github.com/nipunravisara/encipher"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
