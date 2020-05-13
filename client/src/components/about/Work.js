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
  Card,
  Divider,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

export default function Morning({ props }) {
  console.log(props);
  return (
    <>
      <Grid container justify="center">
        <Grid item sx={10}>
          <Typography variant="h3">
            <Box fontStyle="italic">{props.tagline}</Box>
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Grid item sm={10}>
          <Typography variant="h6" subtitle>
            {props.title}
          </Typography>
        </Grid>
        <Grid item sm={8}>
          <Typography variant="p">{props.intro}</Typography>
        </Grid>
        <Grid container justify="center" alignItems="center" spacing={2}>
          {props.techCards.map((cardObj) => (
            <Grid item md={12 / props.techCards.length}>
              <Card raised>
                <CardContent>
                  <Grid container justify="center">
                    <Grid item>
                      <Typography variant="h4">{cardObj.title}</Typography>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Grid container justify="center">
                    <Grid item>
                      <CardMedia>
                        <img src={cardObj.image} height="135" />
                      </CardMedia>
                    </Grid>
                  </Grid>
                  <Typography variant="p">{cardObj.text}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
}
