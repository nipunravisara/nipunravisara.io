import React from "react";
import Logo from "../assets/logo";

const Header = () => (
  <div className="container mx-auto text-center m-12">
    <center>
      <Logo />
    </center>
    <div className="fixed top-10 right-10 bg-green-400 px-4 py-2 pt-3 rounded-md">
      <a
        className="text-black"
        href="src/assets/Nipun-ravisara-resume.pdf"
        download
      >
        Resume
      </a>
    </div>
  </div>
);

export default Header;
