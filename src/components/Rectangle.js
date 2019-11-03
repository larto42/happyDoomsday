import React from "react"
import styled from "styled-components"

const Rectangle = styled.div`
  position: absolute;
  z-index: -1;
  background: ${props => props.color};
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  bottom: ${props => props.bottom}px;

  @media (max-width: 1280px) {
    width: ${props => props.width}%;
    height: ${props => props.height}%;
    left: ${props => props.left * 0.6}px;
    top: ${props => props.top * 0.6}px;
    right: ${props => props.right * 0.6}px;
    bottom: ${props => props.bottom * 0.6}px;
  }
`

export default ({ color, width, height, left, top, right, bottom }) => (
  <Rectangle
    color={color}
    width={width}
    height={height}
    left={left}
    top={top}
    right={right}
    bottom={bottom}
  />
)
