import React, { useState } from "react";
import { Button, Paper, Grid, Typography, Divider } from "@material-ui/core";
import styled from "styled-components";
const classNames = require("classnames");

//want this to be a self contained overlay

export default function BeforeDay({ showOverlay, toggleOverlay }) {
  return (
    <div
      className={classNames("aboutOverlay", {
        animated: !showOverlay,
        slideOutDown: !showOverlay,
        height: !showOverlay ? 0 : "auto",
        display: !showOverlay ? "none" : "block",
      })}
    >
      <Paper className="beforePaper">
        <Grid container direction="column" alignItems="center" spacing={6}>
          <Grid item sm={10}>
            <Typography variant="h2">
              So, you want to learn more about me?
            </Typography>
            <Divider m={2} />
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5" subtitle>
              First, and foremost, I am a Biologist turned Software Developer.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="p" subtitle>
              But secondly, I'm just a guy who loves to code. Whether its
              written in JavaScript, or Python, or C++ for an Arduino, I'm into
              it. I've also got a bad habit of starting personal projects that
              nobody asked for...
            </Typography>
          </Grid>
          <Grid item sm={6}>
            <Typography variant="p" subtitle>
              I've got a lot to learn, but also a lot to offer. I understand
              that there is always room for improvement, and am quick to own up
              to my mistakes, I'm hoping to find a place where I can grow both
              as a Developer, but as a person as well.
            </Typography>
          </Grid>
          <Grid item sm={8}>
            <Typography variant="h5" subtitle>
              And what better way than to walk through an average day in the
              life of James?
            </Typography>
          </Grid>
          <Grid item>
            <Button onClick={toggleOverlay}>Let's go!</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
