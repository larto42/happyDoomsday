import styled from "styled-components"

export const Rectangle = styled.div`
  position: absolute;
  z-index: -1;
  background: ${props => props.color};
  width: ${props => props.width}%;
  height: ${props => props.height}%;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  right: ${props => props.right}px;
  bottom: ${props => props.bottom}px;
  transition: transform .2s;

  @media (max-width: 1280px) {
    width: ${props => props.width}%;
    height: ${props => props.height}%;
    left: ${props => props.left * 0.6}px;
    top: ${props => props.top * 0.6}px;
    right: ${props => props.right * 0.6}px;
    bottom: ${props => props.bottom * 0.6}px;
  }
`