import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import StrengthE from "../components/strength-embed";
import strength from "../program-details/strength-data";
import StrengthMain from "../components/strength-main";

export default function Strength() {
  const strengthTest = strength.map((item) => {
    return <StrengthMain key={item.id} {...item} />;
  });
  return (
    <div className="Cardio">
      <Navbar />
      <h1>Strength Training</h1>
      <StrengthE embedId="AjAVhtQ2vok" />
      <StrengthE embedId="GViX8riaHX4" />
      <section className="cardio--cont">{strengthTest}</section>
      <Footer />
    </div>
  );
}
// GViX8riaHX4;
