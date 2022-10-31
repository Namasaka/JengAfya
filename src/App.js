import React from "react";
import "../src/style.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import WhyUs from "./pages/WhyUs";
import Testimonials from "./pages/Testimonials";
import Trainers from "./pages/Trainers";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Cardio from "./program-pages/Cardio";
import Fat from "./program-pages/Fat";
import Health from "./program-pages/Health";
import Strength from "./program-pages/Strength";

// import { render } from "react-dom";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/whyus" element={<WhyUs />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/trainers" element={<Trainers />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/programs/Cardio Training" element={<Cardio />} />
        <Route path="/programs/Strength Training" element={<Strength />} />
        <Route path="/programs/Fat Burning" element={<Fat />} />
        <Route path="/programs/Health Fitness" element={<Health />} />
      </Routes>
    </div>
  );
};

export default App;
