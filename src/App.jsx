import React from "react";
import LayoutDefault from "./Layout/LayoutDefault";
import About from "./Views/About";
import Experience from "./Views/Experience";
import Work from "./Views/Work";

function App() {
  return (
    <LayoutDefault>
      <About />
      <Experience />
      <Work />
    </LayoutDefault>
  );
}

export default App;
