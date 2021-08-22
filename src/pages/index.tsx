import {graphql, PageProps, useStaticQuery, Link as GatsbyLink} from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

import CoffeePressMobileImg from '../images/home/hero/coffeepress-mobile.jpg';
import CoffeePressTabletImg from '../images/home/hero/coffeepress-tablet.jpg';
import CoffeePressDesktopImg from '../images/home/hero/coffeepress-desktop.jpg';
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

const IndexPage: React.FC<Pick<PageProps, 'path'>> = ({path}) => {
  /** Type checks the query of collection section data */
  interface ImagesQuery {
    nodes: Array<{
      id: number;
      publicURL: string;
      name: string;
    }>;
  }
  interface SectionInfoJson {
    nodes: Array<{
      id: number;
      image?: string;
      icon?: string;
      title: string;
      description: string;
    }>;
  }

  interface SubDetailsJson {
    nodes: Array<{
      id: number;
      step: number;
      title: string;
      description: string;
    }>;
  }
  interface HomeData {
    allCollectionInfoJson: SectionInfoJson;
    allFeaturesInfoJson: SectionInfoJson;
    allSubDetailsJson: SubDetailsJson;
    CollectionImages: ImagesQuery;
    FeaturesImages: ImagesQuery;
  }

  /**
   * Primary querying of items for the index page from either JSON files or the images folder. This includes:
   * * Image paths and text for the Collection Section
   * * Text for the Features Section
   * * Text for the Subscription Steps Section
   * * Images for the Collection Section
   * * Images for the Features Section
   */
  const {
    allCollectionInfoJson: {nodes: collectionInfo},
    allFeaturesInfoJson: {nodes: featuresInfo},
    allSubDetailsJson: {nodes: subDetails},
    CollectionImages: {nodes: collectionImages},
    FeaturesImages: {nodes: featuresImages},
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
      allSubDetailsJson {
        nodes {
          id
          step
          title
          description
        }
      }
      CollectionImages: allFile(
        filter: {relativeDirectory: {eq: "home/collection"}}
      ) {
        nodes {
          id
          publicURL
          name
        }
      }
      FeaturesImages: allFile(
        filter: {relativeDirectory: {eq: "home/features"}}
      ) {
        nodes {
          id
          publicURL
          name
        }
      }
    }
  `);

  const indexHero = {
    title: 'Great coffee made simple.',
    description:
      'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
    imageSet: {
      base: CoffeePressMobileImg,
      sm: CoffeePressTabletImg,
      xl: CoffeePressDesktopImg,
    },
  };

  return (
    <Layout location={path} heroData={indexHero}>
      <Seo title="Home" />
      {/* == Collection Section == */}
      <Box as="section">
        <Heading
          bgGradient={{
            md: 'linear(gray.500 25%, transparent)',
          }}
          bgColor={{base: 'gray.500', md: 'transparent'}}
          bgClip="text"
          fill="transparent"
          filter={{md: 'opacity(0.5)'}}
          fontSize={{base: '40px', md: '96px'}}
          lineHeight="72px"
          marginBottom="8"
          position={{md: 'absolute'}}
          textTransform="lowercase"
          zIndex={{md: '-1'}}
        >
          Our Collection
        </Heading>
        <Stack
          as={List}
          spacing="56px"
          overflow="visible"
          maxWidth="full"
          paddingX={{md: '56px'}}
        >
          {collectionInfo.map(({id, image, title, description}, index) => {
            // Match png name value from 'home/collection' to 'image' value
            const picture = collectionImages.find(({name}) => name === image);
            return (
              <Box
                as={ListItem}
                key={id}
                display="flex"
                flexDirection={{base: 'column', md: 'row'}}
                alignItems="center"
                paddingX={['24px', '0']}
                data-sal={index % 2 ? 'slide-left' : 'slide-right'}
                data-sal-duration="1000"
              >
                <Image src={picture?.publicURL} height="184px" />
                <Box textAlign={{md: 'left'}} marginLeft={{md: '36px'}}>
                  <Heading
                    as="h3"
                    size="2xl"
                    textTransform="capitalize"
                    mb={{base: '4', md: '6'}}
                  >
                    {title}
                  </Heading>
                  <Text>{description}</Text>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </Box>
      {/* == Feature section == */}
      <Box as="section" color="white">
        <Box
          bg="darkGray.500"
          borderRadius="10px"
          height={{base: '902px', md: '573px'}}
          position="absolute"
          zIndex="-2"
          top="0"
          width="full"
        />
        <Box px={{base: '6', md: '14'}} pt="16">
          <VStack marginBottom="72px" maxWidth="540px" mx="auto">
            <Heading size="2xl" marginBottom="6">
              Why choose us?
            </Heading>
            <Text>
              A large part of our role is choosing which particular coffees will
              be featured in our range. This means working closely with the best
              coffee growers to give you a more impactful experience on every
              level.
            </Text>
          </VStack>
          <Stack as={List} spacing="6">
            {featuresInfo.map(({icon, title, description, id}, index) => {
              // Matching svg name value from 'home/features' to the 'icon' value
              const imageSVG = featuresImages.find(({name}) => icon === name);
              return (
                <Center
                  key={id}
                  as={ListItem}
                  borderRadius="8px"
                  flexDirection={{base: 'column', md: 'row'}}
                  bg="brand.500"
                  padding={{md: '42px 48px 42px 17px'}}
                  px="24px"
                  py="58px"
                  data-sal={index % 2 ? 'flip-down' : 'flip-up'}
                  data-sal-duration="1000"
                >
                  <Center width={{md: '165px'}} flexShrink={0}>
                    <Image
                      src={imageSVG?.publicURL}
                      alt=""
                      width={{base: '72px', md: '56px'}}
                      marginBottom={{base: '14', md: '0'}}
                    />
                  </Center>
                  <Box textAlign={{md: 'left'}}>
                    <Heading
                      as="h3"
                      size="xl"
                      textTransform="capitalize"
                      mb="4"
                    >
                      {title}
                    </Heading>
                    <Text>{description}</Text>
                  </Box>
                </Center>
              );
            })}
          </Stack>
        </Box>
      </Box>
      {/* == Subscription Details section == */}
      <Box as="section">
        <Heading
          fontSize="1.5rem"
          lineHeight="32px"
          color="gray.500"
          marginBottom={{base: '92px', md: '60px'}}
          alignSelf={{md: 'flex-start'}}
        >
          How it works
        </Heading>
        <Stack
          as={List}
          spacing={{base: '72px', md: '0'}}
          direction={{base: 'column', md: 'row'}}
        >
          {subDetails.map(({id, step, title, description}) => (
            <Flex
              as={ListItem}
              key={id}
              flexDirection="column"
              alignItems={{base: 'center', md: 'flex-start'}}
              textAlign={{md: 'left'}}
              position="relative"
              paddingTop={{md: '72px'}}
              _before={{
                md: {
                  // eslint-disable-next-line quotes
                  content: `""`,
                  background: 'white',
                  boxSize: '8',
                  borderRadius: '50%',
                  border: '2px solid',
                  borderColor: 'brand.500',
                  position: 'absolute',
                  top: '-16px',
                },
              }}
              _notLast={{
                md: {
                  paddingRight: '16px',
                  borderTop: '2px solid',
                  borderTopColor: 'accent-primary.500',
                },
              }}
            >
              <Text
                color="accent-primary.500"
                fontFamily="heading"
                fontSize="72px"
                lineHeight="1"
                marginBottom={{md: '24px'}}
                maxWidth="100%"
              >
                {
                  // Add a 0 in front of the iterated number
                  `0${step}`
                }
              </Text>
              <Heading
                as="h3"
                size="xl"
                marginBottom="6"
                lineHeight="1.5"
                width={{md: '206px'}}
              >
                {title}
              </Heading>
              <Text>{description}</Text>
            </Flex>
          ))}
        </Stack>
        <Button
          as={GatsbyLink}
          to="/subscribe"
          size="lg"
          mt={{base: '20', md: '6'}}
          colorScheme="brand"
          alignSelf={{base: 'center', md: 'flex-start'}}
        >
          Create your plan
        </Button>
      </Box>
    </Layout>
  );
};

export default IndexPage;
