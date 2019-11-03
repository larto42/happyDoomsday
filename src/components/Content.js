import React from "react"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};
  flex-grow: 2;
  margin-top: ${props => props.marginTop}px;
  height: 0px;

  @media (max-width: 1280px) {
    margin-top: ${props => props.marginTop * 0.5}px;
  }
`

export default ({ marginTop, justify, align, children }) => (
  <Content
    marginTop={marginTop}
    justify={justify || "space-between"}
    align={align || "center"}
  >
    {children}
  </Content>
)
