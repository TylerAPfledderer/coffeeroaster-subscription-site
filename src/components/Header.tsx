import React, { useEffect } from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  useMediaQuery,
} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useState } from "react"
import NavList from "./NavList"
import Hero from "./Hero"
import { LocationProps } from "../types/interfaces"
import { HeroDataProps } from "./layout"

// Define props here to pass typping in parent component
interface HeaderProps extends LocationProps, HeroDataProps {}

const Header: React.FC<HeaderProps> = ({ pagePath, heroData }) => {
  // Check re-hydration
  const [isMounted, setMounted] = useState(false)
  // Toggling Nav Menu (on the small screen)
  const [isMenuOpen, setMenuToggle] = useState(false)

  const [isLessThan768] = useMediaQuery("(max-width: 767px)")

  useEffect(() => {
    // Component has re-hydrated
    setMounted(true)
  }, [])

  // Set the check for small screen with nav menu closed on mount
  const isSmallScreenMenuClosed = isMounted && isLessThan768 && !isMenuOpen

  return (
    <Box
      as="header"
      maxW="1440px"
      mx="auto"
      px={{ base: "16px", md: "42px", lg: "80px" }}
    >
      <Flex justifyContent="space-between" alignItems="center" py="32px">
        <Box w={{ base: "162px", md: "auto" }}>
          <Image src="../logo.svg" alt="" mb="0" />
        </Box>
        <Button
          bg="transparent"
          display={{ md: "none" }}
          onClick={() => setMenuToggle(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </Button>
        <Container
          as="nav"
          layerStyle={isSmallScreenMenuClosed ? "navClosed" : "navOpened"}
          position={{ base: "fixed", md: "static" }}
          display="flex"
          justifyContent={{ base: "center", md: "revert" }}
          pt={{ base: "40px", md: 0 }}
          padding={{ md: 0 }}
          margin={{ md: 0 }}
          width={{ base: "full", md: "auto" }}
          maxW="full"
          height={{ base: "100vh", md: "auto" }}
          overflow="hidden"
          top="104px"
          left="0"
          bgGradient="linear(white 50%, transparent)"
          transition="max-height .3s, opacity .5s"
          zIndex="overlay"
        >
          <NavList
            listStyleType="none"
            textTransform="uppercase"
            direction={{ base: "column", md: "row" }}
            alignItems="center"
            spacing="8"
            fontSize={{ base: "24px", md: "16px" }}
          />
        </Container>
      </Flex>
      <Hero pagePath={pagePath} heroData={heroData} />
    </Box>
  )
}

export default Header
