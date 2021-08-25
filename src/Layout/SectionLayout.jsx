import React from "react";

const SectionLayout = ({ title, subTitleOne, subTitleTwo, content }) => {
  return (
    <>
      <div className="pt-28 md:pt-24">
        <p className="text-base uppercase tracking-widest text-gray-400 mb-5 md:mb-10">
          {title}
        </p>
        <div className="ml-1 md:ml-8">
          <h1 className="text-6xl md:text-9xl font-black">{subTitleOne}</h1>
          <h1 className="text-6xl md:text-9xl font-black">{subTitleTwo}</h1>
        </div>

        <div className="pt-6 md:pt-20">{content}</div>
      </div>
    </>
  );
};

export default SectionLayout;
