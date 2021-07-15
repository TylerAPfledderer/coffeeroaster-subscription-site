import React from "react"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Link as GatsbyLink } from "gatsby"
import { LocationProps } from "../types/interfaces"
import { HeroDataProps } from "./layout"

interface HeroProps extends LocationProps, HeroDataProps {}

const Hero: React.FC<HeroProps> = ({
  pagePath,
  heroData: { title, description, imageSet },
}) => {
  return (
    <Flex
      direction="column"
      alignItems={{ base: "center", md: "flex-start" }}
      bgImage={imageSet}
      bgPos="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      color="white"
      textAlign={{ base: "center", md: "left" }}
      padding="100px 24px"
      borderRadius="10px"
    >
      <Heading as="h1" size="4xl" mb="6" maxWidth="492px">
        {title}
      </Heading>
      <Text maxWidth="445px">{description}</Text>
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
  )
}

export default Hero
