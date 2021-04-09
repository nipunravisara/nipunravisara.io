import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const LayoutDefault = ({ children }) => (
  <>
    <Header />
    <main className="container mx-auto px-8 md:px-14 lg:px-72 h-full">
      {children}
    </main>
    <Footer />
  </>
);

export default LayoutDefault;
