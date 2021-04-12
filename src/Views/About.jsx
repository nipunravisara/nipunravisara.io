import React from "react";
import SectionLayout from "../Layout/SectionLayout";

const About = () => {
  return (
    <SectionLayout
      title="About"
      subTitleOne="Hey"
      subTitleTwo="I'm Nipun"
      content={
        <p className="leading-relaxed text-sm md:text-lg">
          A Frontend Developer/UI/UX Designer based in Colombo, Sri Lanka who
          begins the journey as a freelance designer nearly 3 years ago and
          inspired by the community, Most of the time I used to design and build
          digital products, UIs while maintaining good and clean codebase.
          Mainly passionate about mobile development and working on improving my
          experience as a mobile developer. you can find my portfolio below or
          just drop me an email
        </p>
      }
    />
  );
};

export default About;
