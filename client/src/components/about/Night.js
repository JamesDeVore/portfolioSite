import React from "react";
import {
  Grid,
  Container,
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Avatar,
  List,
  ListItemText,
  ListItem,
  Divider
} from "@material-ui/core";
import bubba from '../../assets/bubba.jpg'


export default function Night(props) {
  
  return (
    <>
      <Grid
        container
        justify="space-around"
        alignItems="flex-start"
        direction="column"
        spacing={8}
      >
        <Grid container justify="center">
          <Grid item xs={8}>
            <Typography variant="h3">
              <Box fontStyle="italic">Now onto the fun stuff...</Box>
            </Typography>
            <Divider />
          </Grid>
          <Grid item xs={8}>
            <Typography variant="p">
              When I say fun, I of course mean playing with Arduinos and
              Raspberry Pis
            </Typography>
            <Typography variant="p" subtitle>
              Here is a brief summary of what I've made (pictures probably to
              come soon)
            </Typography>
            <List>
              <ListItem>
                <ListItemText>Touch Activated LED Tank Top</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>GPS tracking dog collar</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  (In Progress) Arduino Controlled Christmas Lights
                </ListItemText>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="h5" subtitle>
              But my life isn't all around tech...
            </Typography>
            <br />
            <Typography variant="p">
              I've recently found a love for 18th century cooking, running,
              motorcycling, and of course...
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Card raised>
              <CardContent>
                <Grid container justify="center">
                  <Grid item>
                    <Typography variant="h5">Myrah - a.k.a. "Bubbah"</Typography>
                  </Grid>
                </Grid>
                <Divider />
                <Grid container justify="center">
                  <Grid item>
                    <CardMedia>
                      <Grid item xs={5}>
                        <Avatar
                          alt="Myrah!"
                          style={{ height: "150px", width: "150px" }}
                          src={bubba}
                        />
                      </Grid>
                    </CardMedia>
                  </Grid>
                </Grid>
                <Typography variant="p">Honestly a good part of my time not spent in front of a keyboard is spent out running, chasing squirrels on a hike, or fixing toys she has broken. Is it weird to have your dog on your portfolio site? Well it's probably too late for that.</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        <Grid item xs={10}></Grid>
      </Grid>
    </>
  );
}
