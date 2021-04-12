import React from "react";
import Email from "../assets/Email";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";
import Behance from "../assets/Behance";
import Twitter from "../assets/Twitter";
import Instagram from "../assets/Instagram";
import Facebook from "../assets/Facebook";
import SectionLayout from "../Layout/SectionLayout";

const Contact = () => {
  return (
    <>
      <SectionLayout
        title="Contact"
        subTitleOne="Let’s"
        subTitleTwo="Talk"
        content={
          <>
            <div className="flex flex-row justify-start mb-5">
              <div className="inline-table p-4 md:p-10 w-2 h-2 hover:bg-green-400">
                <Email className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="inline-table p-4 md:p-10 w-2 h-2 hover:bg-gray-400">
                <Github className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="inline-table p-4 md:p-10 w-2 h-2 hover:bg-indigo-500">
                <Linkedin className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="inline-table p-4 md:p-10 w-2 h-2 hover:bg-blue-500">
                <Behance className="w-6 h-6 md:w-10 md:h-10" />
              </div>
            </div>
            <div className="flex flex-row justify-end">
              <div className="inline-table p-4 md:p-10 w-2 h-2 hover:bg-blue-300">
                <Twitter className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="inline-table p-4 md:p-10 w-2 h-2 hover:bg-red-400">
                <Instagram className="w-6 h-6 md:w-10 md:h-10" />
              </div>
              <div className="inline-table p-4 md:p-10 w-2 h-2 hover:bg-blue-600">
                <Facebook className="w-6 h-6 md:w-10 md:h-10" />
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default Contact;
