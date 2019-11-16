import styled from "styled-components"
import {Rectangle} from '../Rectangle/RectangleStyles'

export const Button = styled.button`
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

export const ButtonWrapper = styled.div`
  position: relative;
  margin: 20px 0;
  z-index: 0;
  
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
