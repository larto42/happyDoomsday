import React from "react"
import Header from "../components/Header"
import IndexPage from "../components/pagesComponents/IndexPage"
import piratesBg from "../../static/piraciBg.jpg"
import ProjectPage from "../components/pagesComponents/ProjectPage"

import p1 from "../../static/pirates/IS1.png"
import p2 from "../../static/pirates/IS2.png"
import p3 from "../../static/pirates/IS3.png"

import wb1 from "../../static/wolfBusters/WB1.jpg"
import wb2 from "../../static/wolfBusters/WB2.jpg"
import wb3 from "../../static/wolfBusters/WB3.jpg"
import wb4 from "../../static/wolfBusters/WB4.jpg"
import wb5 from "../../static/wolfBusters/WB5.jpg"

export default () => {
  const imgGallery = {
    pirates: [p1, p2, p3, p1, p2, p3],
    wolfBusters: [wb1, wb2, wb3, wb4, wb5],
  }
  const descriptions = {
    pirates: [
      `Pirates are the best in telling stories. And more than often you say it's impossible! that could happen. In our games we show you one of this adventures.`,
      `We promise! It has really happened!`,
      `Our two brave men have to fight for their lives running from skeletons that are comming from all sides of the ship. Kill them before they kill you.
      Use barrels and boxes as obstacles to buy yourself some time. Use combined strenght of both our heroes to lift the cannon and shoot thoes bastards in the face ARGHHH!`,
    ],
    wolfBusters: [
      `Protect your sheeps from vicious wolves by shooting them with precious cabbage.
      But be careful not to run over one of your fluffy friends when drifting with your tractor.`,
      `Game can be played by up to 4 players in splitscreen mode.`,
      `Project made for Ludum Dare 43 Game Jam`,
    ],
  }
  return (
    <React.Fragment>
      <Header />
      <IndexPage />
      <ProjectPage
        title="Impossible Storrries!"
        bgImage={piratesBg}
        galleryImgs={imgGallery.pirates}
        description={descriptions.pirates}
      />
      <ProjectPage
        title="WolfBusters"
        bgImage={piratesBg}
        galleryImgs={imgGallery.wolfBusters}
        description={descriptions.wolfBusters}
      />
    </React.Fragment>
  )
}
