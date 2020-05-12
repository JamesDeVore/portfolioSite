import React from "react";
import MainSection from "./Section";
import { styled } from "@material-ui/styles";
import SkillList from "../skills";

export default function Skills() {
  return (
    <div className="container">
      <div className="row flex align-items-center justify-content-center p-4 about-me-row">
        <div className="col-md-12 text-center">
          <h2>A Little About What I Do</h2>
          <hr />
        </div>
        <div className="col-md-4">
          <div>
            <p>
              Currently I am working as a full-stack software developer with a
              small company in Chapel Hill, NC specializing in manufacturing
              insights and production management.
            </p>
            <p>
              I am lucky enough to have my hands on all aspects of the
              development process, from coding custom components for the
              customer facing UI, to authentication and validation in C# on the
              back end, to observing build pipelines and deployment for new
              clients.
            </p>
          </div>
        </div>
        <div className="row col-md-6 justify-content-center">
          <SkillList />
        </div>
        <div className="row"></div>
      </div>
    </div>
  );
}
