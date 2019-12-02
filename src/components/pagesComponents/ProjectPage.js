import React, { forwardRef } from "react"
import ContainerWrapper from "../ContainerWrapper"
import Gallery from "../Gallery"
import ProjectDescription from "../ProjectDescription"
import styled from "styled-components"

const Container = styled.div `
  grid-column: 2;
  display: grid;
  grid-template-columns: 1fr 400px;
  column-gap: 30px;
  align-items:center;
  padding-top: 17vh;

  @media(max-width: 1220px) {
    padding: 0px 20px;
  }

  @media(max-width: 850px) {
    grid-template-columns: 1fr;
  }
`

const DescriptionWrapper = styled.div`
  grid-column: 2;
  position: relative;

  @media(max-width: 850px) {
    grid-column: 1;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
`

export default forwardRef(({ bgImage, title, galleryImgs, description, className }, ref) => (
  <ContainerWrapper bgImage={bgImage} className={className}>
    <Container ref={ref}>
      <Gallery images={galleryImgs} />
      <DescriptionWrapper>
        <ProjectDescription text={description} title={title}/>
      </DescriptionWrapper>
    </Container>
  </ContainerWrapper>
))
