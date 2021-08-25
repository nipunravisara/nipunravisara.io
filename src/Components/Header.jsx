import React from "react";
import Logo from "../assets/logo";

const Header = () => (
  <div className="container mx-auto text-center m-12">
    <center>
      <Logo />
    </center>
    {/* <div className="fixed top-10 right-10 px-4 py-1 pt-2 border rounded">
      <a className="text-white" href={PDF} target="_blank" rel="noreferrer">
        Resume
      </a>
    </div> */}
  </div>
);

export default Header;
