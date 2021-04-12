import React from "react";
import LayoutDefault from "./Layout/LayoutDefault";
import About from "./Views/About";
import WorkHistory from "./Views/WorkHistory";
import Experience from "./Views/Experience";
import Work from "./Views/Work";
import Contact from "./Views/Contact";

function App() {
  return (
    <LayoutDefault>
      <About />
      <WorkHistory />
      <Experience />
      <Work />
      <Contact />
    </LayoutDefault>
  );
}

export default App;
