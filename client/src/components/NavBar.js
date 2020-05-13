import React from "react";
import { Link } from "react-router-dom";

import { FaGithub, FaLinkedin } from "react-icons/fa";
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
  const externalLinks = [
    {
      url: "https://github.com/jamesdevore",
      buttonText: <FaGithub size="2em" />,
    },
    {
      url: "https://www.linkedin.com/in/jdevore4592/",
      buttonText: <FaLinkedin size="2em" />,
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="#">
        James DeVore
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav mr-auto">
          {links.map((link) => {
            return (
              <li className="nav-item">
                <Link className="nav-link" to={link.url}>
                  <a className="navLink">{link.buttonText}</a>
                </Link>
              </li>
            );
          })}
          {externalLinks.map((link) => (
            <li className="nav-item">
              <a href={link.url} target="blank" className="nav-link">
                {link.buttonText}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
    // <AppBar position="relative" className="NavBar">
    //   <Toolbar variant="dense">
    //     <Grid
    //       container
    //       display="flex"
    //       justify="space-between"
    //       alignItems="center"
    //     >
    //       <Grid item>
    //         <Name variant="h6" m={14}>
    //           James DeVore
    //         </Name>
    //       </Grid>
    //       <Grid item>
    //         <MiddleTitle variant="h6" m={14}>
    //           Software Developer
    //         </MiddleTitle>
    //       </Grid>
    //       <Grid item mx="auto">
    //
    //       </Grid>
    //     </Grid>
    //   </Toolbar>
    // </AppBar>
  );
}
