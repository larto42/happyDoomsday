import React from "react"
import Rectangle from "./Rectangle"
import styled from "styled-components"
import {Cyan} from './../Colors'

const Button = styled.button`
  color: #000;
  background: #fff;
  padding: 15px 20px;
  font-size: 20px;
  border: none;
  cursor: pointer;
  transition: transform 0.1s;

  @media (max-width: 1280px) {
    padding: 10px 20px;
    font-size: 20px;
  }
`

const ButtonWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  z-index: 0;
  display: inline-block;
  /* left: 40%; */

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
    <Rectangle color={Cyan} width="95" height="9" left="-20" top="20" />
    <Rectangle color={Cyan} width="60" height="15" left="-45" top="33" />
    <Rectangle color={Cyan} width="90" height="40" right="-30" top="-6" />
    <Rectangle color={Cyan} width="45" height="12" right="-35" bottom="14" />
    <Rectangle color={Cyan} width="95" height="35" left="-15" bottom="-10" />
  </ButtonWrapper>
)
