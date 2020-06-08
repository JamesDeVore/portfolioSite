import React from "react";
import react from "../assets/react.png";
import node from "../assets/node-mini.png";
import csharp from "../assets/csharp.png";
import azure from "../assets/azure.png";
import aws from "../assets/aws.png";
import mongo from "../assets/mongo.jpg";
import python from "../assets/python.jpg";
import sql from "../assets/sql.jpg";
import rust from "../assets/rust.jpg";
import git from "../assets/git.png";
import heroku from "../assets/heroku.png";
import { Chip, Avatar } from "@material-ui/core";

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
    title: "C#",
    bckg: "rgb(56,0,143)",
    text: "rgb(250,250,250)",
    image: csharp,
  },
  {
    title: "Python",
    bckg: "rgb(54,109,157)",
    text: "rgb(248,190,48)",
    image: python,
  },
  {
    title: "Rust",
    bckg: "#C49F7C",
    text: "white",
    image: rust,
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
    title: "MongoDB",
    bckg: "rgb(18,142,77)",
    text: "rgb(248,220,152)",
    image: mongo,
  },
  {
    title: "SQL",
    bckg: "#B8D432",
    text: "#2975C9",
    image: sql,
  },
  {
    title: "Git",
    bckg: "#3F2C00",
    text: "White",
    image: git,
  },
  {
    title: "Heroku",
    bckg: "#5721B2",
    text: "White",
    image: heroku,
  },
];

export default function skills(props) {
  return skillItems.map((skillObj) => {
    return (
      <div className="col-md-4">
        <Chip
          label={skillObj.title}
          style={{
            backgroundColor: skillObj.bckg,
            color: skillObj.text,
            margin: "10px 0px",
            height: "45px",
          }}
          avatar={<Avatar src={skillObj.image} />}
        />
      </div>
    );
  });
}
