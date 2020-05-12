import React from "react";
import react from "../assets/react.png";
import node from "../assets/node-mini.png";
import csharp from "../assets/csharp.png";
import azure from "../assets/azure.png";
import aws from "../assets/aws.png";
import mongo from "../assets/mongo.jpg";
import python from "../assets/python.jpg";
import { Grid, Chip, Avatar } from "@material-ui/core";

const skillItems = [
  {
    title: "React",
    text: "rgb(97, 219, 251)",
    bckg: "black",
    image: react,
  },
  {
    title: "NodeJS",
    bckg: "rgb(48, 48, 48)",
    text: "rgb(104, 160, 99)",
    image: node,
  },
  {
    title: "C-Sharp",
    bckg: "rgb(56,0,143)",
    text: "rgb(250,250,250)",
    image: csharp,
  },
  {
    title: "Azure",
    bckg: "rgb(0,111,193)",
    text: "rgb(250,250,250)",
    image: azure,
  },
  {
    title: "AWS",
    bckg: "rgb(34,46,60)",
    text: "rgb(250,250,250)",
    image: aws,
  },
  {
    title: "Mongo",
    bckg: "rgb(18,142,77)",
    text: "rgb(248,220,152)",
    image: mongo,
  },
  {
    title: "Python",
    bckg: "rgb(54,109,157)",
    text: "rgb(248,190,48)",
    image: python,
  },
];

export default function skills(props) {
  return skillItems.map((skillObj) => {
    return (
      <Grid item>
        <Chip
          label={skillObj.title}
          style={{
            backgroundColor: skillObj.bckg,
            color: skillObj.text,
          }}
          avatar={<Avatar src={skillObj.image} />}
        />
      </Grid>
    );
  });
}
