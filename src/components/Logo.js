import React from "react"
import logo from "../../static/HappyDoomsday - Glitch.webm"
import styled from "styled-components"

const Logo = styled.video`
  width: ${props => props.width};
`

export default ({ width }) => {
  return <Logo src={logo} width={width} autoPlay loop muted></Logo>
}
