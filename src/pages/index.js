import React from "react"
import styled from "styled-components"
import Header from "../components/Header"
import Logo from "../components/Logo"
import Slogan from "../components/Slogan"
import Button from "../components/Button"
import indexBg from "../../static/indexBg.png"

const ContainerWrapper = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1fr) 1fr;
  background-size: cover;
  background-image: url(${props => props.bgImage});
  height: 100vh;
  width: 100%;
`

const Container = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 40px 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 2;
`

export default () => (
  <React.Fragment>
    <Header />
    <ContainerWrapper bgImage={indexBg}>
      <Container>
        <Content>
          <Logo width="55vh" />
          <Slogan text="Dont worry, You are in good hands." />
          <Button text="Check out our " highlightText="projects" />
        </Content>
      </Container>
    </ContainerWrapper>
  </React.Fragment>
)
