import React from "react";
import FatE from "../components/fat-embed";
import FatMain from "../components/fat-main";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fat from "../program-details/fat-data";

export default function Fat() {
  const fatTest = fat.map((item) => {
    return <FatMain key={item.id} {...item} />;
  });
  return (
    <div className="Cardio">
      <Navbar />
      <h1>Fat Burning</h1>
      <FatE embedId="IT94xC35u6k" />
      <FatE embedId="UheajlsZ72E" />
      <section className="cardio--cont">{fatTest}</section>
      <Footer />
    </div>
  );
}
