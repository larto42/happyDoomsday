import React from "react"
import {Rectangle} from './RectangleStyles'

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
