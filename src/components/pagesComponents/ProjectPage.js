import React from "react"
import ContainerWrapper from "../ContainerWrapper"
import Gallery from "../Gallery"
import ProjectDescription from "../ProjectDescription"
import styled from "styled-components"

const Container = styled.div `
  grid-column: 2;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 30px;
  align-items:center;
`

const DescriptionWrapper = styled.div`
  grid-column: 2;
  position: relative;
`

export default ({ bgImage, title, galleryImgs, description }) => (
  <ContainerWrapper bgImage={bgImage}>
    <Container>
      <Gallery images={galleryImgs} />
      <DescriptionWrapper>
        <ProjectDescription text={description} title={title}/>
      </DescriptionWrapper>
    </Container>
  </ContainerWrapper>
)
