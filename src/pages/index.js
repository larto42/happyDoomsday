import React from "react"
import styled from "styled-components"
import Menu from "../components/Menu"

const Container = styled.div`
  background: black;
  color: red;
  height: 100vh;
  width: 100vw;
`
export default () => (
  <Container>
    <Menu />
  </Container>
)
