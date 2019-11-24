import React, { Component } from "react"
import styled from "styled-components"
import Menu from "./Menu"
import Logo from "./Logo"

const Head = styled.div`
  position: fixed;
  display: grid;
  grid-template-columns: 1fr minmax(1200px, 1fr) 1fr;
  z-index: 10;
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2;
  margin: 20px 0 20px 40px;
`

const LogoWrapper = styled.div `
  opacity: .4;
`

export default class Header extends Component {
  constructor(props) {
    super(props);
    const {indexRef, projectsRef, teamRef, contactRef} = props;
    this.indexRef = indexRef;
    this.projectsRef = projectsRef;
    this.teamRef = teamRef;
    this.contactRef = contactRef;

    this.logoRef = React.createRef();
  }

  componentDidMount = () => {  
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: [.1,.2,.3,.4,.5,.6,.7,.8,.9,1]
    };

    let observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.logoRef.current);
  }

  handleIntersect = (entries, observer) => {
    console.log(entries)
  }

  render() {
    return (
      <Head>
        <HeaderContent>
          <LogoWrapper ref={this.logoRef}>
            <Logo width="12vh" />
          </LogoWrapper>
          <Menu indexRef={this.indexRef} projectsRef={this.projectsRef} teamRef={this.teamRef} contactRef={this.contactRef} />
        </HeaderContent>
      </Head>
    )
  }
}
