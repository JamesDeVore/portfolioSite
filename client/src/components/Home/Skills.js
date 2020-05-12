import React from "react";
import MainSection from "./Section";
import { Container, Typography, Grid, Avatar } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import SkillList from "../skills";
import TextContainer from "./TextContainer";

const Description = styled(Typography)({
  fontFamily: "'Open Sans Condensed', sans-serif;",
});
export default function Skills() {
  return (
    <MainSection>
      <Grid container direction="row">
        <TextContainer>
          <Description variant="h2">A little about what I do...</Description>
          <hr style={{ height: "2px", backgroundColor: "black" }} />
          <Description variant="p">
            From making front end applications in React, to authentication and
            database queries in with Node or C#. I Love working on all aspects
            of a project, and don't limit myself to just one stack.
          </Description>
          <br />
          <Description variant="p">
            I love branching out and applying new languages or technologies, and
            often use a silly project as an excuse to try my hand at
            implementing something I've never done before.
          </Description>
        </TextContainer>
        <Grid item container justify="space-evenly">
          <SkillList />
        </Grid>
      </Grid>
    </MainSection>
  );
}
