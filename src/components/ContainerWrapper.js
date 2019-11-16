import React from "react"
import styled from "styled-components"

const ContainerWrapper = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1fr) 1fr;
  background-size: cover;
  background-image: url(${props => props.bgImage});
  height: 100vh;
  width: 100%;
  position: relative;
  /* scroll-snap-align: start; */
`

export default props => (
  <ContainerWrapper bgImage={props.bgImage}>{props.children}</ContainerWrapper>
)
