import React from "react"
import styled from "styled-components"

const Slogan = styled.div`
  font-size: 32px;
  font-style: italic;
  text-align: center;
  margin: 30px 0;
`

export default props => <Slogan>{props.text}</Slogan>
