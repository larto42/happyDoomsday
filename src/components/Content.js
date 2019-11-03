import React from "react"
import styled from "styled-components"

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.justify};
  flex-grow: 2;
  margin-top: ${props => props.marginTop}px;
  height: 0px;
`

export default props => (
  <Content
    marginTop={props.marginTop}
    justify={props.justify || "space-between"}
  >
    {props.children}
  </Content>
)
