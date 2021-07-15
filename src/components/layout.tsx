// TODO: Check this StackOverflow answer on setting up context for the pages: https://stackoverflow.com/a/62062145

import React from "react"
import Header from "./Header"

// TODO: Send this interface to Context, unless default values handle the check
export interface HeroDataProps {
  heroData: {
    title: string
    description: string
    imageSet: {}
  }
}

interface LayoutProps extends HeroDataProps {
  location: string
}

const Layout: React.FC<LayoutProps> = ({ children, location, heroData }) => {
  return (
    <div>
      <Header pagePath={location} heroData={heroData} />
      <main>{children}</main>
      <footer>This is a footer</footer>
    </div>
  )
}

export default Layout
