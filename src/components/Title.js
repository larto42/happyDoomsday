import React from "react"
import styled from "styled-components"
import {Cyan} from "../Colors"
// import Rectangle from "./Rectangle"

const Title = styled.h2`
  color: ${Cyan};
  font-size: 26px;
  padding: 10px 0 30px;
  border: none;
  text-align: center;
`

export default ({ text }) => (
  <Title>{text}</Title>
)
