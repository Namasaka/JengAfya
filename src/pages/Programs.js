import React from "react";
import Navbar from "../components/Navbar";
import ProgramMain from "../components/Programs-main";
import Footer from "../components/Footer";
import dataPrograms from "../data-programs";
import "../style.css";

export default function Programs() {
  const programs = dataPrograms.map((item) => {
    return <ProgramMain key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <h1 className="program--title">EXPLORE OUR PROGRAMS TO SHAPE YOU</h1>
      <section className="program--card">{programs}</section>
      <Footer />
    </div>
  );
}
