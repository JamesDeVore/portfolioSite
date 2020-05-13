import React from "react";
import ProjectItem from "./ProjectItem";

import rep1 from "../../assets/projects/checkrep1.PNG";
import rep2 from "../../assets/projects/rep2.PNG";
import path1 from "../../assets/projects/token.PNG";
import path2 from "../../assets/projects/runelord.PNG";
import twaw from "../../assets/projects/twaw1.PNG";
import twaw2 from "../../assets/projects/twaw2.PNG";
import twaw3 from "../../assets/projects/twaw3.PNG";
import bb from "../../assets/projects/borkbit.PNG";
import bb2 from "../../assets/projects/borkbit2.PNG";

const projects = [
  {
    name: "Check My Representative",
    images: [rep1, rep2],
    summary:
      "This is a web app I created with the hopes for people to learn a little more about their representatives in government. Simply type in a name, and see voting history, bills passed, trips funded, and other valuable information",
    detailedDesc:
      "Check My Representative is powered by information from ProPublica Congress API. By leveraging their immense, up to data data, I can create valuable insights into representatives using D3 JS to create unique charts, and Google Geocoding API to illustrate the locations of trips around the world. The styling was done with Tailwind, and is mobile-friendly.",
  },
  {
    name: "Pathfinder Tooling",
    images: [path1, path2],
    summary:
      "Using AWS RDS, Python, NodeJS, and ReactJS, I've created a handful of tools that interact with MapTool (a virtual tabletop). All of my tools help enrich player experience and speed up game and file management.",
    detailedDesc:
      "I've found that DnD (Pathfinder specifically) is an excellent vehicle for me to create and experiment with projects and learn new technologies. With Amazon Web Services and Python, I host and manage a database (and associated API endpoint and Lambda Function) which can provide data for any creature in the Pathfinder beastuary. Players who use this cool can quickly and easily make a player token for any of these creatures (A process that easily took 30 minutes otherwise. \nAlso with Python, I've created scripts to generate unique filetypes that can be imported into Maptool, and used Pandas to iterate over very large csv files and automate the creation of Maptool's unique filetypes. \nFinally, using NodeJS, React, and Maptool in game scripting ('Macros'), I host a sound server in which players can upload links to YouTube videos, have those videos downlaoded to my machine, and then served back over the internet to Maptool's live server, in a simple and easy to use interface.",
  },
  {
    name: "The Well Armed Woman Gun Finder",
    images: [twaw, twaw2, twaw3],
    summary:
      "I worked with The Well Armed Woman LLC to create a tool that helps women easily find the right handgun to suit their needs. Combining their experience with firearms education with an easy to use quiz, I helped simplify the process for women to find the right gun for them.",
    detailedDesc:
      "Using proprietary gun data given to me by The Well Armed Woman, I helped formulate a quiz that could accurately take user input and create a simple algorithm that would lead women to find the right gun for them. I worked directly with marketing managers and company leadership to create a product along strict deadlines and adhere to quality standards. By myself.",
  },
  {
    name: "PawTrack aka BorkBit",
    images: [bb, bb2],
    summary:
      "I created a fitbit for dogs! Combining my love for arduino, and web development, I created a standalone application with a custom made GPS tracker for your dogs collar in order to track the total distance ran by your pup at any given time. Patents pending (no, not really).",
    detailedDesc:
      "Using an arduino, Bluetooth module, and GPS logger, I hand made a device that could connect to yor dogs collar and track their movement over any period of time. With the push of a button on the device, data logging would begin. When you wanted to upload your data, I created a React application that would use the (experimental) chrome bluetooth API to stream that data to the application where it was stored and displayed to the user. The device also allowed for live tracking of your dog, in case they got away.",
  },
];

export default function Projects() {
  return (
    <div className="container">
      <div className="row about-me-row">
        <div className="col-md-12 text-center">
          <h2>A Little About What I've Done</h2>
          <hr />
        </div>
        {projects.map((proj) => (
          <ProjectItem project={proj} />
        ))}
      </div>
    </div>
  );
}
