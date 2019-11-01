import React from "react"
import styled from "styled-components"
import Menu from "./Menu"

const Header = styled.div`
  display: flex;
  justify-content: right;
`
export default () => (
  <Header>
    <Menu />
  </Header>
)
