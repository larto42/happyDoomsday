import React from "react"
import Logo from "../Logo"
import Slogan from "../Slogan"
import Button from "../Button"
import ContainerWrapper from "../ContainerWrapper"
import Container from "../Container"
import Content from "../Content"
import indexBg from "../../../static/indexBg.jpg"

export default () => (
  <ContainerWrapper bgImage={indexBg}>
    <Container>
      <Content>
        <Logo width="55vh" />
        <Slogan text="Dont worry, You are in good hands." />
        <Button text="Check out our " highlightText="projects" />
      </Content>
    </Container>
  </ContainerWrapper>
)
