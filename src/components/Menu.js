import React from "react"
import styled from "styled-components"

const MenuWrapper = styled.ul`
  width: 450px;
  display: flex;
  justify-content: space-between;
`

const MenuItem = styled.li`
  color: white;
  padding: 10px 20px;

  &:hover {
    color: #ff00ff;
    background: white;
  }
`
export default function Menu() {
  return (
    <MenuWrapper>
      <MenuItem>Home</MenuItem>
      <MenuItem>Projects</MenuItem>
      <MenuItem>Team</MenuItem>
      <MenuItem>Contact</MenuItem>
    </MenuWrapper>
  )
}
