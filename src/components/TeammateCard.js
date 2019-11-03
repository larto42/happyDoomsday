import React from "react"
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center center;
`

const Name = styled.h3`
  font-weight: normal;
  font-size: 24px;
  margin: 15px 0;
`

const Position = styled.span`
  font-size: 18px;
`

export default ({ image, name, position }) => (
  <Card>
    <Image src={image} alt="" />
    <Name>{name}</Name>
    <Position>{position}</Position>
  </Card>
)
