import React from "react"
import { Box, Button, Container, Flex, useMediaQuery } from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useState } from "react"
import NavList from "./NavList"
import Hero from "./Hero"
import { LocationProps } from "../types/interfaces"
import { HeroDataProps } from "./layout"
import Logo from "./Logo"

// Define props here to pass typping in parent component
interface HeaderProps extends LocationProps, HeroDataProps {}

const Header: React.FC<HeaderProps> = ({ pagePath, heroData }) => {
  // Toggling Nav Menu (on the small screen)
  const [isMenuOpen, setMenuToggle] = useState(false)

  const [isGreaterThan768] = useMediaQuery("(min-width: 768px)")

  return (
    <Box as="header" maxW="1440px" mx="auto" px={{ md: "42px", lg: "80px" }}>
      {/* The proverbial "Navbar" */}
      <Flex
        justifyContent="space-between"
        alignItems="center"
        px={{ base: "6", md: "inherit" }}
        py="4"
        bg="white"
        width="full"
        position="fixed"
        top="0"
        left="0"
        zIndex="sticky"
      >
        <Box w={{ base: "162px", md: "auto" }}>
          <Logo />
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
          top="72px"
          left="0"
          bgGradient="linear(white 50%, transparent)"
          transition="max-height .3s, opacity .5s"
          zIndex="overlay"
          layerStyle={
            isGreaterThan768 || isMenuOpen ? "navOpened" : "navClosed"
          }
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
