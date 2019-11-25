import React from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  List,
  ListItemText,
  ListItem,
  Divider
} from "@material-ui/core";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import WebIcon from "@material-ui/icons/Web";
import CodeIcon from "@material-ui/icons/Code";
import styled from "styled-components";

export default function Sunrise(props) {
  return (
    <Grid
      container
      className="sunrisePanel"
      justify="space-around"
      alignItems="flex-start"
      direction="column"
      spacing={8}
    >
      <Grid container justify="center" item>
        <Typography variant="h4">
          <Box fontStyle="italic">My day starts sometime around 7:00 AM...</Box>
        </Typography>
        <Divider />
      </Grid>

      <Grid item container justify="center" xs={10} spacing={4}>
        <Grid item xs={6}>
          <Typography variant="h5" subtitle>
            By now, I've already:
          </Typography>
          <List>
            <ListItem>
              <DirectionsRunIcon m={2} />
              <ListItemText>Ran a Half Marathon</ListItemText>
            </ListItem>
            <ListItem>
              <WebIcon m={2} />
              <ListItemText>
                Finished dev work on 2 or 3 client applications
              </ListItemText>
            </ListItem>
            <ListItem>
              <CodeIcon m={2} />
              <ListItemText>
                Pushed up a brand new JavaScript front end framework
              </ListItemText>
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={8}>
          <Typography variant="p">
            Ok, I'll be honest. I'm not up to much at this point in the day.
            Either hitting the snooze button, or prepping myself some coffee.
            <br />
            <br />
            Hey, we are going through an average day, right?
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
