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


export default function Sunrise(props) {
  
  return (
    <Grid
      container
      justify="space-around"
      alignItems="flex-start"
      direction="column"
      spacing={8}
    >
      <Grid container justify="center">
        <Grid item xs={8}>
          <Typography variant="h4">
            <Box fontStyle="italic">
              Now onto the fun stuff...
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={10}>
      </Grid>
    </Grid>
  );
}
