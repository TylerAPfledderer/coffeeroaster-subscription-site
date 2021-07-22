// TODO: Check this StackOverflow answer on setting up context for the pages: https://stackoverflow.com/a/62062145

import { Box } from "@chakra-ui/react"
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
    <Box textAlign="center">
      <Header pagePath={location} heroData={heroData} />
      <Box as="main" marginTop="32">
        {children}
      </Box>
      <footer>This is a footer</footer>
    </Box>
  )
}

export default Layout
