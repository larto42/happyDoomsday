import React from "react"
import styled from "styled-components"

import GameTitle from './GameTitle'
import SmallButton from "./SmallButton/SmallButton"

const DescriptionWrapper = styled.div`
  background: black;
  padding: 30px;
  /* width: 400px; */
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media(max-width: 850px) {
    width: auto;
  }
`

const Description = styled.div `
  text-align: justify;
`

const Paragraph = styled.p`
  margin-bottom: 20px;
`

export default ({ title, text }) => (
  <DescriptionWrapper>
    <GameTitle text={title} />
    <Description>
      {text.map((paragraph, index) => (
        <Paragraph key={index}>{paragraph}</Paragraph>
      ))}
    </Description>
    <SmallButton>Download</SmallButton>
  </DescriptionWrapper>
)
