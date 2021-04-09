import React from "react";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = () => {
  return (
    <>
      <div className="pt-28 md:pt-48">
        <p className="text-base uppercase tracking-widest text-gray-400 mb-2 md:mb-10">
          Experience
        </p>
        <div className="ml-1 md:ml-8">
          <h1 className="text-6xl md:text-9xl font-black">Full</h1>
          <h1 className="text-6xl md:text-9xl font-black">Stack</h1>
        </div>
        <div className="pt-6 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
            <ExperienceCard
              designation="Full-Stack Developer"
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
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2">
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
        </div>
      </div>
    </>
  );
};

export default Experience;
