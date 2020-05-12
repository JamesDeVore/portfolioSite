import React from "react";
import { useState, useEffect } from "react";

import Me from "../components/Home/Me";
import Skills from "../components/Home/Skills";
import $ from "jquery";

const HomePage = () => {
  return (
    <div className="HomeContainer">
      <Me />
      <Skills />
    </div>
  );
};
export default HomePage;
