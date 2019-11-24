import React, { forwardRef } from "react"
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
  padding-top: 17vh;
`

const DescriptionWrapper = styled.div`
  grid-column: 2;
  position: relative;
`

export default forwardRef(({ bgImage, title, galleryImgs, description }, ref) => (
  <ContainerWrapper bgImage={bgImage}>
    <Container ref={ref}>
      <Gallery images={galleryImgs} />
      <DescriptionWrapper>
        <ProjectDescription text={description} title={title}/>
      </DescriptionWrapper>
    </Container>
  </ContainerWrapper>
))
