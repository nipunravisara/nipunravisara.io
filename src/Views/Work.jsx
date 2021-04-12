import React from "react";
import PortfolioCard from "../Components/PortfolioCard";
import SectionLayout from "../Layout/SectionLayout";

const Work = () => {
  return (
    <>
      <SectionLayout
        title="Work"
        subTitleOne="Portfolio"
        content={
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2">
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
            <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 md:grid-rows-2">
              <PortfolioCard
                name="Cruz"
                description="Cruz is a AI based cross-platform mobile application for personal mental health utilization."
                sourceType="Ongoing..."
                link="https://github.com/nipunravisara/encipher"
              />
            </div>
          </>
        }
      />
    </>
  );
};

export default Work;
