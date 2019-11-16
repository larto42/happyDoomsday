import React from "react"
import styled from "styled-components"
import ContainerWrapper from "../ContainerWrapper"
import {Title} from "../SectionTitleStyle"
import TeammateCard from "../TeammateCard"

import martaImg from "../../../static/team/marta.jpg"
import marcinImg from "../../../static/team/marcin.jpg"
import konradImg from "../../../static/team/konrad.jpg"

const TeamCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`

const Container = styled.div `
  grid-column: 2;
  display: grid;
  grid-template-rows: 70px 4fr 3fr;
  padding: 17vh 0 0;
  justify-content: start;
`

const Description = styled.div`
  width: 65%;
  align-self: flex-start;
  margin-left: 10%;

  @media (max-width: 1280px) {
    margin-left: 50px;
  }
`

const DescriptionTitle = styled.h4`
  font-size: 24px;
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

export default ({ bgImage }) => (
  <ContainerWrapper bgImage={bgImage}>
    <Container>
      <Title>Our Team</Title>
      <TeamCards>
        <TeammateCard
          image={marcinImg}
          name="Marcin"
          position="Programmer"
        />
        <TeammateCard
          image={martaImg}
          name="Marta"
          position="3D/2D Artist"
        />
        <TeammateCard
          image={konradImg}
          name="Konrad"
          position="3D Artist"
        />
      </TeamCards>
      <Description>
        <DescriptionTitle>Coś tam o zespole</DescriptionTitle>
        <DescriptionParagraph>
          Protect your sheeps from vicious wolves by shooting them with
          precious cabbage. But be careful not to run over one of your
          fluffy friends when drifting with your tractor. But be careful not
          to run over one of your fluffy friends when drifting with your
          tractor.
            </DescriptionParagraph>
        <DescriptionParagraph>
          Protect your sheeps from vicious wolves by shooting them with
          precious cabbage. But be careful not to run over one of your
          fluffy friends when drifting with your tractor. But be careful not
          to run over one of your fluffy friends when drifting.
            </DescriptionParagraph>
      </Description>
    </Container>
  </ContainerWrapper>
)
