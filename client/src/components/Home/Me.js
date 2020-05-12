import React from "react";
import MainSection from "./Section";
import { styled } from "@material-ui/styles";
import { Container, Typography, Grid, Avatar } from "@material-ui/core";
import james from "../../assets/james.jpg";
import TextContainer from "./TextContainer";
export default function Me() {
  const MeSection = styled(MainSection)({});
  const Pic = styled(Avatar)({
    height: "200px",
    width: "200px",
    boxShadow: "8px 8px 3px 0px rgba(0,0,0,0.75)",
  });
  const Description = styled(Typography)({
    fontFamily: "'Open Sans Condensed', sans-serif;",
  });

  return (
    <MeSection>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid item>
          <Pic sizes={"height:250px"} src={james} />
        </Grid>
        <TextContainer item>
          <Description variant="h3">A little about me. . .</Description>
          <hr style={{ height: "2px", backgroundColor: "black" }} />
          <Description variant="p">
            I am a Full-Stack web developer who spends his time coding apps
            nobody asked for, and playing with arduinos.
          </Description>
          <br />
          <Description variant="p">
            I made a transition in my life, leaving behind a life of Ecology
            research to pursue software development, and haven't looked back.
          </Description>
          <br />
          <Description variant="p">
            I'm driven by a constant desire to learn new things, and am very
            easily distracted by all things code.
          </Description>
        </TextContainer>
      </Grid>
    </MeSection>
  );
}
