import React from "react"
import styled from "styled-components"
import ContainerWrapper from "../ContainerWrapper"
import Container from "../Container"
import Content from "../Content"
import Title from "../Title"
import TeammateCard from "../TeammateCard"
import Rectangle from "../Rectangle"

import martaImg from "../../../static/team/marta.jpg"
import marcinImg from "../../../static/team/marcin.jpg"
import konradImg from "../../../static/team/konrad.jpg"

const TeamCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 60px;

  @media (max-width: 1280px) {
    margin: 30px;
  }
`

const Spacer = styled.div`
  position: relative;
  width: 7vw;
  height: 60px;
  z-index: 0;
`

const Description = styled.div`
  width: 65%;
  align-self: flex-start;

  @media (max-width: 1280px) {
    margin-left: 50px;
  }
`

const DescriptionTitle = styled.h4`
  font-size: 24px;
  margin: 30px 0;
  @media (max-width: 1280px) {
    font-size: 20px;
  }
`

const DescriptionParagraph = styled.p`
  font-size: 18px;
  margin: 20px 0;
  @media (max-width: 1280px) {
    font-size: 16px;
  }
`

export default () => (
  <ContainerWrapper>
    <Container>
      <Content marginTop="100" justify="flex-start">
        <Title text="Our Team" />
        <TeamCards>
          <TeammateCard image={marcinImg} name="Marcin" position="Programmer" />
          <Spacer>
            <Rectangle
              color="#ff00ff"
              width="45"
              height="12"
              left="20"
              top="5"
            />
            <Rectangle
              color="#ff00ff"
              width="50"
              height="10"
              left="50"
              top="15"
            />
            <Rectangle
              color="#00ffff"
              width="50"
              height="13"
              left="25"
              top="20"
            />
          </Spacer>
          <TeammateCard image={martaImg} name="Marta" position="3D/2D Artist" />
          <Spacer>
            <Rectangle
              color="#ff00ff"
              width="45"
              height="12"
              left="40"
              top="0"
            />
            <Rectangle
              color="#ff00ff"
              width="50"
              height="10"
              left="30"
              top="25"
            />
            <Rectangle
              color="#00ffff"
              width="50"
              height="13"
              left="55"
              top="8"
            />
          </Spacer>
          <TeammateCard image={konradImg} name="Konrad" position="3D Artist" />
        </TeamCards>
        <Description>
          <DescriptionTitle>Coś tam o zespole</DescriptionTitle>
          <DescriptionParagraph>
            Protect your sheeps from vicious wolves by shooting them with
            precious cabbage. But be careful not to run over one of your fluffy
            friends when drifting with your tractor. But be careful not to run
            over one of your fluffy friends when drifting with your tractor.
          </DescriptionParagraph>
          <DescriptionParagraph>
            Protect your sheeps from vicious wolves by shooting them with
            precious cabbage. But be careful not to run over one of your fluffy
            friends when drifting with your tractor. But be careful not to run
            over one of your fluffy friends when drifting.
          </DescriptionParagraph>
        </Description>
      </Content>
    </Container>
  </ContainerWrapper>
)
