import React from "react"
import styled from "styled-components"

const Description = styled.div`
  background: black;
  padding: 30px;
  width: 400px;
  text-align: justify;
  position: absolute;
  top: -125%;
  right: -2%;
  z-index: 1;

  @media (max-width: 1280px) {
    font-size: 13px;
    width: 400px;
    right: 0;
  }
`
const Paragraph = styled.p`
  margin-bottom: 20px;
`

export default ({ text }) => (
  <Description>
    {text.map((paragraph, index) => (
      <Paragraph key={index}>{paragraph}</Paragraph>
    ))}
  </Description>
)
