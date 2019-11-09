import React from "react"
import styled from "styled-components"
import {Cyan} from '../Colors'

const Menu = styled.ul`
  width: 450px;
  display: flex;
  justify-content: space-between;
`

const MenuItem = styled.li`
  color: white;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    color: ${Cyan};
    background: white;
  }
`
export default () => (
  <Menu>
    <MenuItem>Home</MenuItem>
    <MenuItem>Projects</MenuItem>
    <MenuItem>Team</MenuItem>
    <MenuItem>Contact</MenuItem>
  </Menu>
)
