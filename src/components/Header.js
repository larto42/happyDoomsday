import React, { Component } from "react"
import styled from "styled-components"
import Menu from "./Menu"
import Logo from "./Logo"

const Head = styled.div`
  position: fixed;
  display: grid;
  width: 100%;
  grid-template-columns: 1fr minmax(auto, 1200px) 1fr;
  z-index: 10;

  @media (min-width: 1700px) and (min-height: 950px) {
    grid-template-columns: 1fr minmax(auto, 1600px) 1fr;
  }

  @media (min-width: 1900px) and (min-height: 1050px) {
    grid-template-columns: 1fr minmax(auto, 1800px) 1fr;
  }
`

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 2;
  margin: 20px 0 20px 40px;
`

const LogoWrapper = styled.div `
  opacity: 1;
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
      root: this.projectsRef.current,
      rootMargin: "0px",
      threshold: [0,.5,.6,.7,.8,.9,1]
    };

    // Select container with projects
    const projectsPage = document.querySelector('.projects-page');
    let observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(projectsPage);
  }

  handleIntersect = (entries, observer) => {
    let { intersectionRatio: ratio, boundingClientRect: { y } } = entries[0];
    if(y < 0) ratio = 1; // If already past the screen with item don't change opacity

    this.logoRef.current.style.opacity = this.calculateOpacity(ratio);
  }

  calculateOpacity = (input) => {
    /**
     * Map range to different range by:
     * slope = (output_end - output_start) / (input_end - input_start)
     * output = output_start + slope * (input - input_start)
     */
    const slope = 2.5; // how fast to change the fade
    const inputStart = .5;

    let output = slope * (input - inputStart);

    // normalize opacity
    output = output < 0 ? 0 : output;
    output = output > 1 ? 1 : output;

    return output;
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
