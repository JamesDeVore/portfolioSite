import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { styled } from "@material-ui/core/styles";
import styles from "../styles/main";

const SecondaryLink = styled(Button)({
  color: styles.color.secondary,
  margin: "auto",
  alignSelf: "center",
});

const MiddleTitle = styled(Typography)({
  color: styles.color.main,
  fontWeight: "900",
  textDecoration: "underline",
});

const Name = styled(Typography)({
  color: styles.color.secondary,
});
export default function NavBar() {
  const links = [
    {
      url: "/",
      buttonText: "Home",
    },
    {
      url: "/about",
      buttonText: "About Me",
    },
  ];
  return (
    <AppBar position="relative" className="NavBar">
      <Toolbar variant="dense">
        <Grid
          container
          display="flex"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <Name variant="h6" m={14}>
              James DeVore
            </Name>
          </Grid>
          <Grid item>
            <MiddleTitle variant="h6" m={14}>
              Software Developer
            </MiddleTitle>
          </Grid>
          <Grid item mx="auto">
            {links.map((link) => {
              return (
                <Link to={link.url}>
                  <SecondaryLink className="navLink">
                    {link.buttonText}
                  </SecondaryLink>
                </Link>
              );
            })}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
