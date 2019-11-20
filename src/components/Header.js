import React from "react"
import styled from "styled-components"
import Menu from "./Menu"
import Logo from "./Logo"

const Header = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1fr) 1fr;
  z-index: 10;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2;
  margin: 20px 0 20px 40px;
`
export default ({indexRef, projectsRef, teamRef, contactRef}) => (
  <Header>
    <HeaderContent>
      <Logo width="12vh" />
      <Menu indexRef={indexRef} projectsRef={projectsRef} teamRef={teamRef} contactRef={contactRef} />
    </HeaderContent>
  </Header>
)
