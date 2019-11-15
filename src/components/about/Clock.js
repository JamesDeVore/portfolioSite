import React from "react";
import styled from "styled-components";
import Draggable from "react-draggable";

export default function Clock(props) {
  const ClockFace = styled.div`
    height: 5rem;
    width: 8rem;
    background-color: rgb(50, 50, 70);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    border-radius: 15px;
    cursor:grab;
  `;
  const ClockText = styled.h1`
    color: limegreen;
  `;
  const AMPM = styled.p`
    font-size: 0.8em;
    color: limegreen;
    margin-left: 8px;
  `;
  let hour = props.time.hour || "00";
  let minute = props.time.minute || "00";
  let margin = 0;
  let ampm = "AM";
  if (minute < 10 && minute > 0) {
    minute = `0${minute}`;
  }
  if (hour > 11) {
    console.log(hour);
    ampm = "PM";
    margin = "25%";
  }
  if (hour > 12) {
    hour = hour - 12;
  }

  //just needs to change over time
  return (
    <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        position={null}
        grid={[1,1]}
        scale={1}
        >
      <ClockFace className="handle">
        <ClockText>{`${hour}:${minute}`}</ClockText>
        <AMPM style={{ marginTop: margin }}>{ampm}</AMPM>
      </ClockFace>
    </Draggable>
  );
}
