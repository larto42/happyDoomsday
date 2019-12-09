import React, { Component } from "react"
import Header from "../components/Header"
import IndexPage from "../components/pagesComponents/IndexPage"
import ProjectPage from "../components/pagesComponents/ProjectPage"

import piratesBg from "../../static/piraciBg.jpg"
import wolfBustersBg from "../../static/wolfBustersBg.jpg"

import p1 from "../../static/pirates/IS1.jpg"
import p2 from "../../static/pirates/IS2.jpg"
import p3 from "../../static/pirates/IS3.jpg"

import wb1 from "../../static/wolfBusters/WB1.jpg"
import wb2 from "../../static/wolfBusters/WB2.jpg"
import wb3 from "../../static/wolfBusters/WB3.jpg"
import wb4 from "../../static/wolfBusters/WB4.jpg"
import wb5 from "../../static/wolfBusters/WB5.jpg"
import TeamPage from "../components/pagesComponents/TeamPage"
import ContactPage from "../components/pagesComponents/ContactPage"

export default class index extends Component {
  constructor(props) {
    super(props);
    
    this.indexRef = React.createRef();
    this.projectsRef = React.createRef();
    this.teamRef = React.createRef();
    this.contactRef = React.createRef();
  }

  render() {
    const imgGallery = {
      pirates: [
        {
          original: p1,
          thumbnail: p1,
        },
        {
          original: p2,
          thumbnail: p2
        },
        {
          original: p3,
          thumbnail: p3
        }
      ],
      wolfBusters: [
        {
          original: wb1,
          thumbnail: wb1,
        },
        {
          original: wb2,
          thumbnail: wb2
        },
        {
          original: wb3,
          thumbnail: wb3
        },
        {
          original: wb4,
          thumbnail: wb4
        },
        {
          original: wb5,
          thumbnail: wb5
        }
      ]
    }
    const descriptions = {
      pirates: [
        `Pirates are the best in telling stories. And more than often you say it's impossible! that could happen. In our games we show you one of this adventures.`,
        `We promise! It has really happened!`,
        `Our two brave men have to fight for their lives running from skeletons that are comming from all sides of the ship. Kill them before they kill you.
        Use barrels and boxes as obstacles to buy yourself some time. Use combined strenght of both our heroes to lift the cannon and shoot thoes bastards in the face ARGHHH!`,
      ],
      wolfBusters: [
        `Protect your sheep from vicious wolves by shooting them with precious cabbage.
        But be careful not to run over one of your fluffy friends when drifting with your tractor.`,
        `Game can be played by up to 4 players in splitscreen mode.`,
        `Project made for Ludum Dare 43 Game Jam`,
      ],
    }



    return (
      <React.Fragment>
        <Header indexRef={this.indexRef} projectsRef={this.projectsRef} teamRef={this.teamRef} contactRef={this.contactRef} />
        <IndexPage projectsRef={this.projectsRef}  ref={this.indexRef} />
        <ProjectPage
          ref={this.projectsRef}
          className="projects-page"
          title="Impossible Storrries!"
          bgImage={piratesBg}
          galleryImgs={imgGallery.pirates}
          description={descriptions.pirates}
        />
        <ProjectPage
          title="WolfBusters"
          bgImage={wolfBustersBg}
          galleryImgs={imgGallery.wolfBusters}
          description={descriptions.wolfBusters}
        />
        <TeamPage ref={this.teamRef} />
        <ContactPage ref={this.contactRef} />
      </React.Fragment>
    )
  }
}
