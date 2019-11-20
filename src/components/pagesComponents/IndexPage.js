import React from "react"
import Logo from "../Logo"
import Slogan from "../Slogan"
import Button from "../Button"
import ContainerWrapper from "../ContainerWrapper"
import Container from "../Container"
import indexBg from "../../../static/indexBg.jpg"
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 2;
  margin: 4vh 0;
`

const handleClick = place => place.current.scrollIntoView({behavior: "smooth"});

export default ({projectsRef}) => (
  <ContainerWrapper bgImage={indexBg}>
    <Container>
      <Content>
        <Logo width="55vh" />
        <Slogan text="Dont worry, You are in good hands." />
        <Button highlightText="projects" handleClick={()=>handleClick(projectsRef)}>Check out our </Button>
      </Content>
    </Container>
  </ContainerWrapper>
)
