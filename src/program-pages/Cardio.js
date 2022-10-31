import React from "react";
import CardioE from "../components/cardio-embed";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import cardioBeginner from "../program-details/cardio-data";
import CardioMain from "../components/cardio-main";

export default function Cardio() {
  const cardioTest = cardioBeginner.map((item) => {
    return <CardioMain key={item.id} {...item} />;
  });
  return (
    <div className="Cardio">
      <Navbar />
      <h1>Cardio Training</h1>
      <h3 className="cardio--para">Part 1: Beginner</h3>
      <p className="cardio--para">
        Beginner exercises do not require previous experience of physical
        activity or special training to perform. A person can usually increase
        the intensity as they advance in their cardiovascular ability.
      </p>
      <h3 className="cardio--para">Part 2: Intermediate exercises</h3>
      <p className="cardio--para">
        Intermediate exercises increase the intensity of the workout to get the
        heart pumping and the body moving.
      </p>
      <h3 className="cardio--para">Part 3: Advanced exercises</h3>
      <p className="cardio--para">
        A person can increase the intensity — referring to the rate and
        repetitions — of any cardio exercise to convert them into advanced
        movements. However, some exercises are also more complicated and involve
        transitions from floor to standing.
      </p>
      <CardioE embedId="8oQ-WNJoYtM" />
      <CardioE embedId="VWj8ZxCxrYk" />
      <section className="cardio--cont">{cardioTest}</section>

      <Footer />
    </div>
  );
}
