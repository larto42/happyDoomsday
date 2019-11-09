import React from "react"
import styled from "styled-components"

const Slogan = styled.div`
  font-size: 1.7em;
  font-style: italic;
  text-align: center;
`

export default props => <Slogan>{props.text}</Slogan>
