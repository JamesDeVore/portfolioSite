import React from "react";
import { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  Divider,
  Chip,
  Box,
  Button,
} from "@material-ui/core";
import { styled } from "@material-ui/styles";
import Me from "../components/Home/Me";
import Skills from "../components/Home/Skills";
import $ from "jquery";

const HomeBody = styled(Box)({
  background:
    "linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at bottom right, rgba(255,255,255,0.80) 0%, rgba(0,0,0,0.40) 120%) #989898",
  backgroundBlendMode: "multiply,multiply;",
  height: "100%",
});
const HomePage = () => {
  return (
    <HomeBody>
      <Me />
      <Skills />
    </HomeBody>
  );
};
export default HomePage;
