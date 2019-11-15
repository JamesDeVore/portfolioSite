import React from "react";
import { useState, useEffect } from "react";
import lorem from "../assets/loremText";
import Morning from "../components/about/Morning";
import Sunrise from "../components/about/Sunrise";
import Clock from '../components/about/Clock'
import $ from "jquery";
export default function About() {
  const [scrollPos, setScrollPos] = useState(0);
  const [maxHeight, setMaxHeight] = useState(0)
  const daySection = [
    {color: "sunrise", component: Sunrise },
    {color:"morning",component:Morning},
    {color:"afternoon",component:null},
    {color:"evening",component:null},
    {color:"night",component:null}
  ];
  

  const getTime = (currentPos, maxPos) => {
    //this function needs to return the time as a function of where the user is in the window
    let scrollProportion = currentPos / maxPos;
    let startMin = 420;
    let endTime = 1660;

    let totalMinutes = endTime - startMin;
    let currentMinutes = Math.min(((scrollProportion * totalMinutes) + startMin),1350)

    let hour = Math.floor(currentMinutes / 60)
    let minutes = Math.floor(currentMinutes - (hour * 60))
    // console.log(hour)
    return { minute:minutes, hour:hour };
  }
  useEffect(() => {
    setMaxHeight($("body").height())
    $(window)
      .scroll(function() {
        // selectors
        var $window = $(window),
          $body = $("body"),
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
          }
        });
      })
      .scroll();
  },[]);

  return (
    <div className="container">
      <div className="row">
        <h1>A Day in the Life of James DeVore</h1>
      </div>
      <Clock time={getTime(scrollPos,maxHeight)} />
      {daySection.map((item, index) => {
        return (
          <div key={index} className="panel row" data-color={item.color}>
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
