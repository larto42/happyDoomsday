import React from "react"
import styled from "styled-components"
import {Cyan} from "../Colors"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 850px) {
    margin: 25px 0;
  }
`

const Image = styled.img`
  width: 20vh;
  height: 20vh;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;

  @media (max-width: 1280px) {
    width: 150px;
    height: 150px;
  }
`

const Name = styled.h3`
  font-weight: normal;
  font-size: 24px;
  margin: 15px 0;
`

const Position = styled.span`
  font-size: 18px;
  color: ${Cyan};
`

export default ({ image, name, position }) => (
  <Card>
    <Image src={image} alt="" />
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Card>
)
