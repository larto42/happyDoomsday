import React from "react"
import styled from "styled-components"
import {Cyan} from "../Colors"

const GameTitle = styled.h2`
  color: ${Cyan};
  font-size: 26px;
  padding: 10px 0 30px;
  border: none;
  text-align: center;
`

export default ({ text }) => (
  <GameTitle>{text}</GameTitle>
)
