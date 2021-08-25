import React from "react";
import SectionLayout from "../Layout/SectionLayout";

const Experience = () => {
  return (
    <>
      <SectionLayout
        title="Experience"
        subTitleOne="Full"
        subTitleTwo="Stack"
        content={
          <>
            <p className="leading-relaxed text-sm md:text-lg">
              Familiar with
              <span className="text-2xl font-bold">JavaScript</span> related
              technologies. Mostly I have been working on
              <span className="text-2xl font-bold">
                &nbsp;ReactJS, NodeJS,&nbsp;
              </span>
              also gained pretty good experience in Mobile Application
              Development using
              <span className="text-2xl font-bold"> React-Native</span> and
              <span className="text-2xl font-bold">&nbsp;Flutter</span> over 3
              years.
            </p>
            <div className="flex flex-row flex-wrap mt-5 ">
              <p className="leading-relaxed text-sm md:text-lg font-bold mr-3 mb-2 pl-2 pr-2 pt-0.5 w-min border rounded">
                GraphQL
              </p>
              <p className="leading-relaxed text-sm md:text-lg font-bold mr-3 mb-2 pl-2 pr-2 pt-0.5 w-min border rounded">
                NextJS
              </p>
              <p className="leading-relaxed text-sm md:text-lg font-bold mr-3 mb-2 pl-2 pr-2 pt-0.5 w-min border rounded">
                PostgreSQL
              </p>
              <p className="leading-relaxed text-sm md:text-lg font-bold mr-3 mb-2 pl-2 pr-2 pt-0.5 w-min border rounded">
                Python
              </p>
              <p className="leading-relaxed text-sm md:text-lg font-bold mr-3 mb-2 pl-2 pr-2 pt-0.5 w-min border rounded">
                Tailwind
              </p>
              <p className="leading-relaxed text-sm md:text-lg font-bold mr-3 mb-2 pl-2 pr-2 pt-0.5 w-min border rounded">
                UI/UX
              </p>
            </div>
          </>
        }
      />
    </>
  );
};

export default Experience;
