import React from "react";
import { useState, useEffect } from "react";
import Sunrise from "../components/about/Sunrise";
import Clock from "../components/about/Clock";
import BeforeDay from "../components/about/BeforeDay";
import classNames from "classnames";

import techCards from '../components/about/TechCards';
import Work from  '../components/about/Work'
import Night from '../components/about/Night'
import { Container, Grid, Paper } from "@material-ui/core";
import $ from "jquery";
export default function About() {
  const [scrollPos, setScrollPos] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);
  const [activeDay, setActiveDay] = useState("sunrise");

  const daySection = [
    { color: "sunrise", component: Sunrise },
    { color: "morning", component: Work },
    { color: "afternoon", component: Work },
    { color: "evening", component: Work },
    { color: "night", component: Night }
  ];

  const getTime = (currentPos, maxPos) => {
    //this function needs to return the time as a function of where the user is in the window
    let scrollProportion = currentPos / maxPos;
    let startMin = 420;
    let endTime = 1660;

    let totalMinutes = endTime - startMin;
    let currentMinutes = Math.min(
      scrollProportion * totalMinutes + startMin,
      1350
    );

    let hour = Math.floor(currentMinutes / 60);
    let minutes = Math.floor(currentMinutes - hour * 60);
    // console.log(hour)
    return { minute: minutes, hour: hour };
  };
  useEffect(() => {
    setMaxHeight($(".aboutPage").height());
    $(window)
      .scroll(function() {
        // selectors
        var $window = $(window),
          $body = $(".aboutPage"),
          $panel = $(".panel");

        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + $window.height() / 3;
        setScrollPos($window.scrollTop());
        $panel.each(function() {
          var $this = $(this);

          // if position is within range of this panel.
          // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
          // Remember we set the scroll to 33% earlier in scroll var.
          if (
            $this.position().top <= scroll &&
            $this.position().top + $this.height() > scroll
          ) {
            // Remove all classes on body with color-
            $body.removeClass(function(index, css) {
              return (css.match(/(^|\s)color-\S+/g) || []).join(" ");
            });

            // Add class of currently active div
            $body.addClass(`color-${$(this).data("color")}`);
            setActiveDay($(this).data("color"));
          }
        });
      })
      .scroll();
  }, []);

  return (
    <>
      <BeforeDay
        showOverlay={showOverlay}
        toggleOverlay={() => {
          setShowOverlay(false);
          window.scrollTo(0, 0);
        }}
      />
      <Container className={classNames("aboutPage", { hide: showOverlay })}>
        <Clock time={getTime(scrollPos, maxHeight)} />
        <Paper className="aboutPaper">
          <Grid className="aboutPanels" container direction="column" spacing={2}>
            {daySection.map((item, index) => {
              return (
                <Grid
                  item
                  lg={12}
                  key={index}
                  className={classNames("panel", {
                    animated: activeDay === item.color,
                    fadeIn: activeDay === item.color,
                    slower: activeDay === item.color
                  })}
                  data-color={item.color}
                >
                  <div
                    className={classNames({
                      invisible: activeDay !== item.color
                    })}
                  >
                    <item.component props={techCards[item.color]} />
                  </div>
                  <hr />
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
