import { PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import WhitecupMobileImg from "../images/about/hero/whitecup-mobile.jpg"
import WhitecupTabletImg from "../images/about/hero/whitecup-tablet.jpg"
import WhitecupDesktopImg from "../images/about/hero/whitecup-desktop.jpg"

const AboutPage = ({ path }: PageProps) => {
  const aboutHero = {
    title: "About Us",
    description:
      "Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.",
    imageSet: {
      base: WhitecupMobileImg,
      sm: WhitecupTabletImg,
      xl: WhitecupDesktopImg,
    },
  }
  return (
    <Layout location={path} heroData={aboutHero}>
      <Seo title="About Us" />
      Main section
    </Layout>
  )
}

export default AboutPage
