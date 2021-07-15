import { PageProps } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import CoffeePressMobileImg from "../images/home/hero/coffeepress-mobile.jpg"
import CoffeePressTabletImg from "../images/home/hero/coffeepress-tablet.jpg"
import CoffeePressDesktopImg from "../images/home/hero/coffeepress-desktop.jpg"

const IndexPage = ({ path }: PageProps) => {
  const indexHero = {
    title: "Great coffee made simple",
    description:
      "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
    imageSet: {
      base: CoffeePressMobileImg,
      sm: CoffeePressTabletImg,
      xl: CoffeePressDesktopImg,
    },
  }
  return (
    <Layout location={path} heroData={indexHero}>
      <Seo title="Home" />
      Main section
    </Layout>
  )
}

export default IndexPage
