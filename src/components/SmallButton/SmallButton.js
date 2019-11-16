import React from "react"
import Rectangle from "../Rectangle/Rectangle"
import {ButtonWrapper, Button} from './SmallButtonStyles';
import {Cyan} from '../../Colors'

export default ({ children }) => (
  <ButtonWrapper>
    <Button>{children}</Button>
    <Rectangle color={Cyan} width="95" height="9" left="-20" top="20" />
    <Rectangle color={Cyan} width="60" height="15" left="-45" top="33" />
    <Rectangle color={Cyan} width="90" height="40" right="-30" top="-6" />
    <Rectangle color={Cyan} width="45" height="12" right="-35" bottom="14" />
    <Rectangle color={Cyan} width="95" height="35" left="-15" bottom="-10" />
  </ButtonWrapper>
)
