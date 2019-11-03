import React from "react"
import ContainerWrapper from "../ContainerWrapper"
import Container from "../Container"
import Content from "../Content"
import Title from "../Title"
import Gallery from "../Gallery"
import ProjectDescription from "../ProjectDescription"
import SmallButton from "../SmallButton"
import styled from "styled-components"

const DescriptionWrapper = styled.div`
  grid-column: 2;
  position: relative;
`

export default ({ bgImage, title, galleryImgs, description }) => (
  <React.Fragment>
    <ContainerWrapper bgImage={bgImage}>
      <Container>
        <Content marginTop="100">
          <Title text={title} />
        </Content>
      </Container>
      <Gallery images={galleryImgs} />
      <DescriptionWrapper>
        <ProjectDescription text={description} />
        <SmallButton text="Download" />
      </DescriptionWrapper>
    </ContainerWrapper>
  </React.Fragment>
)
