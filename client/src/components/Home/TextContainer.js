import React from "react";
import { Container, Typography, Grid, Avatar } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const TextContainerStyle = styled(Grid)({
  border: "2px solid rgba(0,0,0,.6)",
  borderRadius: "5px",
  padding: "16px",
  color: "rgb(200,200,200)",
  backgroundColor: "rgba(0,0,0,.35)",
  margin: "12px",
});
export default function TextContainer(props) {
  return <TextContainerStyle>{props.children}</TextContainerStyle>;
}
