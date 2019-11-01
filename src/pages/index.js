import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Logo from "../components/Logo"
import Slogan from "../components/Slogan"
import Button from "../components/Button"

const ContainerWrapper = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1fr) 1fr;
  padding: 30px 0;
`

const Container = styled.div`
  grid-column: 2;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default () => (
  <ContainerWrapper>
    <Container>
      <Header />
      <Content>
        <Logo width="600px" />
        <Slogan text="Dont worry, You are in good hands." />
        <Button text="Check out our " highlightText="projects" />
      </Content>
    </Container>
  </ContainerWrapper>
)
