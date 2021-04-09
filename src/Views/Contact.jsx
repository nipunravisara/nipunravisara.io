import React from "react";
import Email from "../assets/Email";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";
import Behance from "../assets/Behance";
import Twitter from "../assets/Twitter";
import Instagram from "../assets/Instagram";
import Facebook from "../assets/Facebook";

const Contact = () => {
  return (
    <>
      <div className="pt-28 md:pt-48">
        <p className="text-base uppercase tracking-widest text-gray-400 mb-5 md:mb-10">
          Contact
        </p>
        <div className="ml-1 md:ml-8">
          <h1 className="text-6xl md:text-9xl font-black">Let’s</h1>
          <h1 className="text-6xl md:text-9xl font-black">Talk</h1>
        </div>
        <div className="pt-6 md:pt-20">
          <div className="flex flex-row justify-start">
            <div className="inline-table p-5 w-1 h-1 hover:bg-green-400">
              <Email className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <div className="inline-table p-5 w-0.5 h-0.5 hover:bg-gray-400">
              <Github className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <div className="inline-table p-5 w-0.5 h-0.5 hover:bg-indigo-500">
              <Linkedin className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <div className="inline-table p-5 w-0.5 h-0.5 hover:bg-blue-500">
              <Behance className="w-6 h-6 md:w-10 md:h-10" />
            </div>
          </div>
          <div className="flex flex-row justify-end">
            <div className="inline-table p-5 w-0.5 h-0.5 hover:bg-blue-300">
              <Twitter className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <div className="inline-table p-5 w-0.5 h-0.5 hover:bg-red-400">
              <Instagram className="w-6 h-6 md:w-10 md:h-10" />
            </div>
            <div className="inline-table p-5 w-0.5 h-0.5 hover:bg-blue-600">
              <Facebook className="w-6 h-6 md:w-10 md:h-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
