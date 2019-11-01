import React from "react"
import styled from "styled-components"
import Menu from "./Menu"
import Logo from "./Logo"

const Header = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1fr) 1fr;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2;
  margin: 20px 0 20px 40px;
`
export default () => (
  <Header>
    <HeaderContent>
      <Logo width="10vh" />
      <Menu />
    </HeaderContent>
  </Header>
)
