import React from "react"
import styled from "styled-components"
import * as Colors from "../Colors"

const Title = styled.h2`
  color: ${Colors.White};
  font-size: 24px;
  background: ${Colors.Cyan};
  padding: 15px 80px;
  border: none;
  text-align: center;
  justify-self: center;
  align-self:flex-start;
`

export default ({ text }) => (
  <Title>{text}</Title>
)
