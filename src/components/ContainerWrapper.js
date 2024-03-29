import React from "react"
import styled from "styled-components"

const ContainerWrapper = styled.div`
  background: black;
  display: grid;
  grid-template-columns: 1fr minmax(auto, 1200px) 1fr;
  background-size: cover;
  background-image: url(${props => props.bgImage});
  height: 100vh;
  width: 100%;
  position: relative;
  /* scroll-snap-align: start; */

  @media (min-width: 1700px) and (min-height: 950px) {
    grid-template-columns: 1fr minmax(auto, 1600px) 1fr;
  }

  @media (min-width: 1900px) and (min-height: 1050px) {
    grid-template-columns: 1fr minmax(auto, 1800px) 1fr;
  }

  @media(max-width: 850px) {
     height: auto;
  }
`

export default ({ className, bgImage, children }) => (
  <ContainerWrapper 
    className={`container-wrapper ${className || ''}`}
    bgImage={bgImage}
  >
    {children}
  </ContainerWrapper>
)
