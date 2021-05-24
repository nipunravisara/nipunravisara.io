import React from "react";
import FileSaver from "file-saver";
import Logo from "../assets/logo";

const Header = () => (
  <div className="container mx-auto text-center m-12">
    <center>
      <Logo />
    </center>
    <div className="fixed top-10 right-10 bg-green-400 px-4 py-2 pt-3 rounded-md">
      <button
        type="button"
        className="text-black"
        onClick={() =>
          FileSaver.saveAs("../assets/resume.pdf", "nipun-ravisara-resume.pdf")
        }
        // download
      >
        Resume
      </button>
    </div>
  </div>
);

export default Header;
