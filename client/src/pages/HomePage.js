import React from "react";
import { useState, useEffect } from "react";

import Me from "../components/Home/Me";
import Skills from "../components/Home/Skills";
import Projects from "../components/projects/Projects"
import $ from "jquery";

const HomePage = () => {
  return (
    <div className="HomeContainer">
      <Me />
      <Skills />
      <Projects />
    </div>
  );
};
export default HomePage;
