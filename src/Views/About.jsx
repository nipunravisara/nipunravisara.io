import React from "react";
import SectionLayout from "../Layout/SectionLayout";

const About = () => {
  return (
    <SectionLayout
      title="About"
      subTitleOne="Hey"
      subTitleTwo="I'm Nipun"
      content={
        <>
          <p className="leading-relaxed text-sm md:text-lg">
            A Senior Software Engineer based in Colombo, Sri Lanka who begins
            the journey as a freelance designer nearly 3 years ago and inspired
            by the community, Most of the time I used to design and build
            digital products, APIs, UIs while maintaining good and clean
            codebase. Additionaly passionate about mobile development and
            working on improving my experience as a Full Stack Senior Software
            Engineer.
          </p>
        </>
      }
    />
  );
};

export default About;
