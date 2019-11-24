import React from "react"
// import {Link} from 'gatsby';
// import AnchorLink from 'react-anchor-link-smooth-scroll'
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

const handleClick = place => place.current.scrollIntoView({behavior: 'smooth'})

export default ({indexRef, projectsRef, teamRef, contactRef}) => (
  <Menu>
    <MenuItem onClick={()=>handleClick(indexRef)}>Home</MenuItem>
    <MenuItem onClick={()=>handleClick(projectsRef)}>Projects</MenuItem>
    <MenuItem onClick={()=>handleClick(teamRef)}>Team</MenuItem>
    <MenuItem onClick={()=>handleClick(contactRef)}>Contact</MenuItem>
  </Menu>
)
