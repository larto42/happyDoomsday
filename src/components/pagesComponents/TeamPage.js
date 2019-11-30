import React, { forwardRef } from "react"
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
  padding: 0 15%;
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

  /* @media (max-width: 1400px) {
    width: auto;
    margin-right: 10%;
  } */
`

const DescriptionTitle = styled.h4`
  font-size: 24px;
  @media (max-width: 1280px) {
    font-size: 20px;
  }
`

const DescriptionParagraph = styled.p`
  font-size: 18px;
  margin: 10px 0;
  /* @media (max-width: 1280px) {
    font-size: 16px;
  } */
  @media (max-width: 1400px) {
    font-size: 16px;
    line-height:18px;
  }
`

export default forwardRef(({ bgImage }, ref) => (
  <ContainerWrapper bgImage={bgImage}>
    <Container ref={ref}>
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
        <DescriptionTitle>Who we are?</DescriptionTitle>
        <DescriptionParagraph>
          We are a team of 3 passionate game developers from Poland. Creating entertaining projects and solving problems 
          is what we really like. That's why we have participated in uncountable gamejams and contests!
        </DescriptionParagraph>
        <DescriptionParagraph>
          Low level programming doesn't scare us. One of our games is created on a custom engine 
          that we have developed from scratch. We like to experiment and test new tools and workflows.
          That's why we have also experience in photogrammetry, motion capture and a lot more!
        </DescriptionParagraph>
        <DescriptionParagraph>
          If you want to join us or get in touch just come to our contact page!
        </DescriptionParagraph>
      </Description>
    </Container>
  </ContainerWrapper>
))
