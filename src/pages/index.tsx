import { graphql, PageProps, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import CoffeePressMobileImg from "../images/home/hero/coffeepress-mobile.jpg"
import CoffeePressTabletImg from "../images/home/hero/coffeepress-tablet.jpg"
import CoffeePressDesktopImg from "../images/home/hero/coffeepress-desktop.jpg"
import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react"

interface CollectionInfo {
  title: string
  description: string
}

const collectionInfo: Array<CollectionInfo> = [
  {
    title: "Gran Espresso",
    description:
      "Light and flavorsome blend with cocoa and black pepper for an intense experience",
  },
  {
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and valvety body, and hints of fruits and nuts",
  },
  {
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry",
  },
  {
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
  },
]

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

  interface CollectionImageData {
    node: {
      id: number
      publicURL: string
      name: string
    }
  }

  const collectionImages = useStaticQuery(graphql`
    query CoffeeCollectionImages {
      allFile(filter: { relativeDirectory: { eq: "home/collection" } }) {
        edges {
          node {
            id
            publicURL
            name
          }
        }
      }
    }
  `)

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
        <Wrap spacing="56px">
          {collectionImages.allFile.edges.map(
            ({ node: { id, publicURL, name } }: CollectionImageData) => {
              const pathName = name.replace(/image|-/g, "")
              const info = collectionInfo.find(
                ({ title }) => title.toLowerCase().replace(" ", "") === pathName
              )
              return (
                <WrapItem
                  key={id}
                  flexDirection="column"
                  textAlign="center"
                  alignItems="center"
                >
                  <Image src={publicURL} width="70%" marginBottom="6" />
                  <Heading as="h3" size="2xl" textTransform="capitalize">
                    {info?.title}
                  </Heading>
                  <Text>{info?.description}</Text>
                </WrapItem>
              )
            }
          )}
        </Wrap>
      </Center>
    </Layout>
  )
}

export default IndexPage
