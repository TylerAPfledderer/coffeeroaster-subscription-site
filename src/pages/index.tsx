import { graphql, PageProps, useStaticQuery } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import CoffeePressMobileImg from "../images/home/hero/coffeepress-mobile.jpg"
import CoffeePressTabletImg from "../images/home/hero/coffeepress-tablet.jpg"
import CoffeePressDesktopImg from "../images/home/hero/coffeepress-desktop.jpg"
import {
  Box,
  Center,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react"

const IndexPage = ({ path }: PageProps) => {
  /** Type checks the query of collection section data */
  interface ImagesQuery {
    nodes: Array<{
      id: number
      publicURL: string
      name: string
    }>
  }
  interface SectionInfoJson {
    nodes: Array<{
      id: number
      image?: string
      icon?: string
      title: string
      description: string
    }>
  }
  interface HomeData {
    allCollectionInfoJson: SectionInfoJson
    allFeaturesInfoJson: SectionInfoJson
    CollectionImages: ImagesQuery
    FeaturesImages: ImagesQuery
  }

  const {
    allCollectionInfoJson: { nodes: collectionInfo },
    allFeaturesInfoJson: { nodes: featuresInfo },
    CollectionImages: { nodes: collectionImages },
    FeaturesImages: { nodes: featuresImages },
  }: HomeData = useStaticQuery(graphql`
    query HomeDataQuery {
      allCollectionInfoJson {
        nodes {
          id
          image
          title
          description
        }
      }
      allFeaturesInfoJson {
        nodes {
          id
          icon
          title
          description
        }
      }
      CollectionImages: allFile(
        filter: { relativeDirectory: { eq: "home/collection" } }
      ) {
        nodes {
          id
          publicURL
          name
        }
      }
      FeaturesImages: allFile(
        filter: { relativeDirectory: { eq: "home/features" } }
      ) {
        nodes {
          id
          publicURL
          name
        }
      }
    }
  `)

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
      {/* == Collection Section == */}
      <Box as="section" marginTop="32">
        <Heading
          textTransform="lowercase"
          bgGradient="linear(gray.500 25%, transparent)"
          bgClip="text"
          fill="transparent"
          marginBottom="8"
        >
          Our Collection
        </Heading>
        <Stack as={List} spacing="56px">
          {collectionInfo.map(({ id, image, title, description }) => {
            const picture = collectionImages.find(({ name }) => name === image)
            return (
              <Box
                as={ListItem}
                key={id}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image src={picture?.publicURL} width="70%" />
                <Heading as="h3" size="2xl" textTransform="capitalize" mb="4">
                  {title}
                </Heading>
                <Text>{description}</Text>
              </Box>
            )
          })}
        </Stack>
      </Box>
      {/* == Feature section == */}
      <Box
        as="section"
        bg="darkGray.500"
        color="white"
        marginTop="32"
        px="6"
        py="16"
        borderRadius="10px"
      >
        <Box marginBottom="72px" width="272px" mx="auto">
          <Heading size="2xl">Why choose us?</Heading>
          <Text>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </Text>
        </Box>
        <Stack as={List} spacing="6">
          {featuresInfo.map(({ icon, title, description, id }) => {
            const imageSVG = featuresImages.find(({ name }) => icon === name)
            return (
              <Center
                as={ListItem}
                key={id}
                flexDirection="column"
                bg="brand.500"
                px="24px"
                py="58px"
                borderRadius="8px"
              >
                <Image
                  src={imageSVG?.publicURL}
                  alt=""
                  width="72px"
                  marginBottom="14"
                />
                <Heading as="h3" size="xl" textTransform="capitalize" mb="4">
                  {title}
                </Heading>
                <Text>{description}</Text>
              </Center>
            )
          })}
        </Stack>
      </Box>
      {/* == Subscription Details section == */}
    </Layout>
  )
}

export default IndexPage
