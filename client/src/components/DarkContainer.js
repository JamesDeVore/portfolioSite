import React from 'react'
import styled from 'styled-components'

export default function DarkContainer(props) {
  const DarkContainer = styled.div`
  min-width:80vw;
  min-height:70vh;
  background-color:rgba(0,0,0,0.6);
  border-radius:20px;
  color:white;
  padding:24px;
  
  `
return <DarkContainer>{props.children}</DarkContainer>;
}
