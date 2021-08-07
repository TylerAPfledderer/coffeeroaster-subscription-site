import React from "react"
import { Box } from "@chakra-ui/react"
import Hero from "./Hero"
import { LocationProps } from "../types/interfaces"
import { HeroDataProps } from "./layout"

// Define props here to pass typping in parent component
interface HeaderProps extends LocationProps, HeroDataProps {}

const Header: React.FC<HeaderProps> = ({ pagePath, heroData }) => {
  return (
    <Box as="header" maxW="1440px" mx="auto">
      <Hero pagePath={pagePath} heroData={heroData} />
    </Box>
  )
}

export default Header
