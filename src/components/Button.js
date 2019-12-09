import React from "react"
import styled from "styled-components"
import Rectangle from './Rectangle/Rectangle'
import {Rectangle as RectangleStyle} from './Rectangle/RectangleStyles'
import { Cyan } from '../Colors'

const Button = styled.button`
  color: #000;
  background: #fff;
  padding: 15px 100px;
  font-size: 1.5em;
  border: none;
  cursor: pointer;
  transition: transform 0.1s;

  @media (max-width: 1280px) {
    font-size: 30px;
  }

  @media(max-width: 850px) {
    font-size: 18px;
    padding: 10px 20px;
  }
`

const HighlightText = styled.span`
  color: ${Cyan};
`

const ButtonWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  z-index: 0;

  &:hover ${RectangleStyle}:nth-child(2) {
    transform: translateX(-60px);
  }
  &:hover ${RectangleStyle}:nth-child(3) {
    transform: translateX(-40px);
  }
  &:hover ${RectangleStyle}:nth-child(4) {
    transform: translateX(50px);
  }
  &:hover ${RectangleStyle}:nth-child(5) {
    transform: translateX(70px);
  }
  &:hover ${Button} {
    transform: scale(1.015);
  }

  @media(max-width: 850px) {
    margin: 50px 0;
  }
`

export default ({ children, highlightText, handleClick}) => (
  <ButtonWrapper>
    <Button onClick={handleClick}>
      {children}
      {highlightText && <HighlightText>{highlightText}</HighlightText>}
    </Button>
    <Rectangle
      color={Cyan}
      width="90"
      height="50"
      left="-20"
      top="-20"
    />
    <Rectangle
      color={Cyan}
      width="60"
      height="15"
      left="-100"
      top="40"
    />
    <Rectangle
      color={Cyan}
      width="70"
      height="25"
      right="-70"
      top="20"
    />
    <Rectangle
      color={Cyan}
      width="85"
      height="45"
      right="-20"
      bottom="-20"
    />
  </ButtonWrapper>
)
