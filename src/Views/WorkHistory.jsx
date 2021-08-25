import React from "react";
import ExperienceCard from "../Components/ExperienceCard";
import SectionLayout from "../Layout/SectionLayout";

const WorkHistory = () => {
  return (
    <>
      <SectionLayout
        title="Worked History"
        subTitleOne="3"
        subTitleTwo="Years"
        content={
          <>
            <div className="grid grid-cols-2 grid-rows-2">
              <ExperienceCard
                designation="Senior Software Engineer Full-Stack"
                company="Emmito (Pvt) Ltd"
                start="Nov 2020"
                end="Present"
              />
              <ExperienceCard
                designation="Full-Stack Developer"
                company="LeafyCode (Pvt) Ltd"
                start="Jun 2020"
                end="Nov 2020"
              />
            </div>
            <div className="grid grid-cols-2 grid-rows-2">
              <ExperienceCard
                designation="Front-End Developer"
                company="LeafyCode (Pvt) Ltd"
                start="Jun 2019"
                end="Jun 2020"
              />
              <ExperienceCard
                designation="UI/UX Designer"
                company="LeafyCode (Pvt) Ltd"
                start="Dec 2018"
                end="Jun 2019"
              />
            </div>
          </>
        }
      />
    </>
  );
};

export default WorkHistory;
