import React from "react";
import Footer from "../components/Footer";
import HealthE from "../components/health-embed";
import Navbar from "../components/Navbar";
import health from "../program-details/health-data";
import HealthMain from "../components/health-main";

export default function Health() {
  const healthTest = health.map((item) => {
    return <HealthMain key={item.id} {...item} />;
  });
  return (
    <div className="Cardio">
      <Navbar />
      <h1>Health Fitness</h1>
      <HealthE embedId="UItWltVZZmE" />
      <section className="cardio--cont">{healthTest}</section>
      <Footer />
    </div>
  );
}
