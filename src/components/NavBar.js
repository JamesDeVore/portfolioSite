import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from '@material-ui/core/Grid'
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
export default function NavBar() {
  const links = [
    {
      url: "/",
      buttonText: "Home"
    },
    {
      url: "/about",
      buttonText: "About Me"
    }
  ];
  return (
    <AppBar position="relative" className="NavBar">
      <Toolbar variant="dense">
        <Grid container justify='space-between' alignItems="flex-end">
          <Grid item>
            <Typography variant="h6">James DeVore</Typography>
          </Grid>
          <Grid item>
            {links.map(link => {
              return (
                <Link to={link.url}>
                  <Button>{link.buttonText}</Button>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
