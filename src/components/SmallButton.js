import React from "react"
import Rectangle from "./Rectangle"
import styled from "styled-components"

const Button = styled.button`
  color: #000;
  background: #fff;
  padding: 15px 20px;
  font-size: 36px;
  border: none;
  cursor: pointer;
  transition: transform 0.1s;
  text-shadow: #ff00ff 3px 2px;

  @media (max-width: 1280px) {
    padding: 10px 20px;
    font-size: 20px;
    text-shadow: #ff00ff 2px 1px;
  }
`

const ButtonWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  z-index: 0;
  display: inline-block;
  left: 40%;

  ${Rectangle}:nth-child(6) {
    z-index: 2;
  }
  &:hover ${Rectangle}:nth-child(2) {
    transform: translateX(-5px);
  }
  &:hover ${Rectangle}:nth-child(3) {
    transform: translateX(-14px);
  }
  &:hover ${Rectangle}:nth-child(4) {
    transform: translateX(10px);
  }
  &:hover ${Rectangle}:nth-child(5) {
    transform: translateX(25px);
  }
  &:hover ${Rectangle}:nth-child(6) {
    transform: translateX(-10px);
  }
  &:hover ${Button} {
    transform: scale(1.015);
  }
`

export default ({ text }) => (
  <ButtonWrapper>
    <Button>{text}</Button>
    <Rectangle color="#00ffff" width="95" height="9" left="-40" top="20" />
    <Rectangle color="#00ffff" width="60" height="15" left="-85" top="33" />
    <Rectangle color="#ff00ff" width="90" height="40" right="-60" top="-6" />
    <Rectangle color="#ff00ff" width="45" height="12" right="-70" bottom="14" />
    <Rectangle color="#00ffff" width="95" height="35" left="-30" bottom="-10" />
  </ButtonWrapper>
)
