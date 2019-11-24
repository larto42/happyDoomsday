import React, { forwardRef } from "react"
import styled from "styled-components"

const Container = styled.div`
  grid-column: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 2em 0 3em;
`

export default forwardRef((props, ref) => <Container ref={ref}>{props.children}</Container>) 
