import React from "react"
import styled from "styled-components"

const Slogan = styled.div`
  font-size: 1.7em;
  font-style: italic;
  text-align: center;

  @media(max-width: 850px) {
    font-size: 1.2em;
    margin: 20px 0;
  }
`

export default props => <Slogan>{props.text}</Slogan>
