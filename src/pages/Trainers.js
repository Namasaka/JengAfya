import React from "react";
import Navbar from "../components/Navbar";
import TrainersMain from "../components/Trainers-main";
import Footer from "../components/Footer";
import data from "../data";
import "../style.css";

export default function Trainers() {
  const trainers = data.map((item) => {
    return <TrainersMain key={item.id} {...item} />;
  });
  return (
    <div>
      <Navbar />
      <section className="card--list">{trainers}</section>
      <Footer />
    </div>
  );
}
