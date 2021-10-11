import React from "react";
import SectionLayout from "../Layout/SectionLayout";

const About = () => {
  return (
    <SectionLayout
      title="About"
      subTitleOne="Hi"
      subTitleTwo="I'm Nipun"
      content={
        <>
          <p className="leading-relaxed text-sm md:text-lg">
            A programmer living in the dream as a full time software engineer
            who begins the journey as a freelance designer I&apos;m currently
            residing in Colombo, Sri Lanka. Most of the time I used to design
            and build digital products, APIs, UIs while maintaining good and
            clean codebase. Additionaly passionate about cloud solutions, mobile
            application development and working on improving my experience as a
            senior software engineer.
          </p>
        </>
      }
    />
  );
};

export default About;
