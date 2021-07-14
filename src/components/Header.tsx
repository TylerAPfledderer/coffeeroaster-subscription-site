import React, { useEffect } from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react"
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons"
import { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import CoffeePressMobileImg from "../images/home/hero/coffeepress-mobile.jpg"
import CoffeePressTabletImg from "../images/home/hero/coffeepress-tablet.jpg"
import CoffeePressDesktopImg from "../images/home/hero/coffeepress-desktop.jpg"
import NavList from "./NavList"

// Define props here to pass typping in parent component
interface HeaderProps {
  pagePath: String
}

const Header: React.FC<HeaderProps> = ({ pagePath }) => {
  // Check re-hydration
  const [isMounted, setMounted] = useState(false)
  // Toggling Nav Menu (on the small screen)
  const [isMenuOpen, setMenuToggle] = useState(false)

  const [isLessThan768] = useMediaQuery("(max-width: 767px)")

  // Initial check for small screen size and the nav menu closed
  const smallScreenMenuCheck = isLessThan768 && !isMenuOpen

  useEffect(() => {
    // Component has re-hydrated
    setMounted(true)
  }, [])

  // Set the check for small screen with nav menu closed on mount
  const isSmallScreenMenuClosed = isMounted && smallScreenMenuCheck

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
          bgGradient="linear(white 25%, transparent)"
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
      <Flex
        direction="column"
        alignItems={{ base: "center", md: "flex-start" }}
        bgImage={{
          base: `url(${CoffeePressMobileImg})`,
          md: `url(${CoffeePressTabletImg})`,
          xl: `url(${CoffeePressDesktopImg})`,
        }}
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        color="white"
        textAlign={{ base: "center", md: "left" }}
        padding="100px 24px"
        borderRadius="10px"
      >
        <Heading as="h1" size="4xl" mb="6" maxWidth="492px">
          Great coffee made simple.
        </Heading>
        <Text maxWidth="445px">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </Text>
        {pagePath === "/" && (
          <Button
            as={GatsbyLink}
            to="/subscribe"
            size="lg"
            mt="48px"
            colorScheme="brand"
          >
            Create your plan
          </Button>
        )}
      </Flex>
    </Box>
  )
}

export default Header
