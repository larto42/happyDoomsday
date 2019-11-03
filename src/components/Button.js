import React from "react"
import styled from "styled-components"

const Button = styled.button`
  color: #000;
  background: #fff;
  padding: 15px 100px;
  font-size: 36px;
  border: none;
  cursor: pointer;
  transition: transform 0.1s;

  @media (max-width: 1280px) {
    font-size: 30px;
  }
`

const HighlightText = styled.span`
  color: #00ffff;
`

const Rectangle = styled.div`
  position: absolute;
  z-index: -1;
  background: ${props => props.color};
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  right: ${props => props.right};
  bottom: ${props => props.bottom};
  transition: transform 0.2s;
`

const ButtonWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  z-index: 0;

  &:hover ${Rectangle}:nth-child(2) {
    transform: translateX(-60px);
  }
  &:hover ${Rectangle}:nth-child(3) {
    transform: translateX(-40px);
  }
  &:hover ${Rectangle}:nth-child(4) {
    transform: translateX(50px);
  }
  &:hover ${Rectangle}:nth-child(5) {
    transform: translateX(70px);
  }
  &:hover ${Button} {
    transform: scale(1.015);
  }
`

export default ({ text, highlightText }) => (
  <ButtonWrapper>
    <Button>
      {text}
      {highlightText && <HighlightText>{highlightText}</HighlightText>}
    </Button>
    <Rectangle
      color="#00ffff"
      width="445px"
      height="37px"
      left="-20px"
      top="-20px"
    />
    <Rectangle
      color="#00ffff"
      width="235px"
      height="8px "
      left="-100px"
      top="40px"
    />
    <Rectangle
      color="#ff00ff"
      width="279px"
      height="17px"
      right="-70px"
      top="20px"
    />
    <Rectangle
      color="#ff00ff"
      width="380px"
      height="27px"
      right="-20px"
      bottom="-20px"
    />
  </ButtonWrapper>
)
