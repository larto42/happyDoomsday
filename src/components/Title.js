import React from "react"
import styled from "styled-components"
import Rectangle from "./Rectangle"

const Title = styled.h2`
  color: #000;
  background: #00ffff;
  padding: 15px 100px;
  font-size: 36px;
  border: none;

  @media (max-width: 1280px) {
    font-size: 20px;
    padding: 10px 70px;
  }
`

const TitleWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  margin-left: ${props => props.marginLeft}px;
  z-index: 0;
  &:hover {
    background: gray;
  }
`

export default ({ text, marginLeft = 0 }) => (
  <TitleWrapper marginLeft={marginLeft}>
    <Title>{text}</Title>
    <Rectangle color="#ff00ff" width="90" height="35" left="-20" top="-15" />
    <Rectangle color="#ff00ff" width="50" height="8" left="-100" top="40" />
    <Rectangle color="#ff00ff" width="50" height="17" right="-70" top="20" />
    <Rectangle
      color="#ff00ff"
      width="85"
      height="55"
      right="-20"
      bottom="-20"
    />
  </TitleWrapper>
)
