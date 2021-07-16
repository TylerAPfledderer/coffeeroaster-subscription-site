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
  interface CollectionData {
    allCollectionInfoJson: {
      nodes: Array<{
        title: string
        description: string
      }>
    }
    allFile: {
      nodes: Array<{
        id: string
        publicURL: string
        name: string
      }>
    }
  }
  const {
    allCollectionInfoJson: { nodes: collectionInfo },
    allFile: { nodes: collectionImages },
  }: CollectionData = useStaticQuery(graphql`
    query CollectionDataQuery {
      allCollectionInfoJson {
        nodes {
          title
          description
        }
      }
      allFile(filter: { relativeDirectory: { eq: "home/collection" } }) {
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
      <Center flexDirection="column" paddingX="12">
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
          {collectionImages.map(({ id, publicURL, name }) => {
            const pathName = name.replace(/image|-/g, "")
            const info = collectionInfo.find(
              ({ title }) => title.toLowerCase().replace(" ", "") === pathName
            )
            return (
              <Box
                as={ListItem}
                key={id}
                display="flex"
                flexDirection="column"
                textAlign="center"
                alignItems="center"
              >
                <Image src={publicURL} width="70%" />
                <Heading as="h3" size="2xl" textTransform="capitalize" mb="4">
                  {info?.title}
                </Heading>
                <Text>{info?.description}</Text>
              </Box>
            )
          })}
        </Stack>
      </Center>
    </Layout>
  )
}

export default IndexPage
