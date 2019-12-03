import React from "react";
import { useState, useEffect } from "react";
import Main from "../components/MainBg";
import DarkContainer from "../components/DarkContainer";
import {
  Grid,
  Typography,
  Avatar,
  Divider,
  Chip,
  Button
} from "@material-ui/core";
import react from "../assets/react.png";
import node from "../assets/node-mini.png";
import csharp from "../assets/csharp.png";
import azure from "../assets/azure.png";
import aws from "../assets/aws.png";
import mongo from "../assets/mongo.jpg";
import python from "../assets/python.jpg";
import james from '../assets/james.jpg'
import $ from "jquery";

const HomePage = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    //using jQuery for animation class handling
    $(".welcomeBtn").on("click", () => {
      $(".welcomeBtn").remove();
      setShowContent(true);
    });
  }, []);

  const skills = [
    {
      title: "React",
      text: "rgb(97, 219, 251)",
      bckg: "black",
      image: react
    },
    {
      title: "NodeJS",
      bckg: "rgb(48, 48, 48)",
      text: "rgb(104, 160, 99)",
      image: node
    },
    {
      title: "C-Sharp",
      bckg: "rgb(56,0,143)",
      text: "rgb(250,250,250)",
      image: csharp
    },
    {
      title: "Azure",
      bckg: "rgb(0,111,193)",
      text: "rgb(250,250,250)",
      image: azure
    },
    {
      title: "AWS",
      bckg: "rgb(34,46,60)",
      text: "rgb(250,250,250)",
      image: aws
    },
    {
      title: "Mongo",
      bckg: "rgb(18,142,77)",
      text: "rgb(248,220,152)",
      image: mongo
    },
    {
      title: "Python",
      bckg: "rgb(54,109,157)",
      text: "rgb(248,190,48)",
      image: python
    }
  ];

  //250, 214, 165
  return (
    <Main>
      <Button className="animated fadeInLeft slower welcomeBtn">
        <Typography variant="h2">Welcome.</Typography>
      </Button>

      {showContent ? (
        <Grid
          container
          justify="center"
          className="homeContent animated fadeIn "
        >
          <Grid item>
            <DarkContainer>
              <Grid
                container
                spacing={6}
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={10}>
                  <Avatar
                    alt="James!"
                    style={{ height: "200px", width: "200px" }}
                    src={james}
                  />
                </Grid>

                <hr className="frontDivider" />
                <Grid item xs={10}>
                  <Typography variant="h3" subtitle>
                    I am a Junior Full Stack Developer
                  </Typography>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="p" subtitle>
                    Feel free to check out some of my projects, or read about
                    me!
                  </Typography>
                  <Typography variant="p" subtitle>
                    This is constantly under development, so bear with me :)
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  spacing={2}
                  justify="center"
                  direction="row"
                >
                  {skills.map(skillObj => {
                    return (
                      <Grid item>
                        <Chip
                          label={skillObj.title}
                          style={{
                            backgroundColor: skillObj.bckg,
                            color: skillObj.text
                          }}
                          avatar={<Avatar src={skillObj.image} />}
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </Grid>
            </DarkContainer>
          </Grid>
        </Grid>
      ) : null}
    </Main>
  );
};
export default HomePage;
