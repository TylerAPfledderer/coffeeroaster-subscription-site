import {graphql, PageProps, useStaticQuery, Link as GatsbyLink} from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import MainSection from '../components/MainSection';

const IndexPage: React.FC<Pick<PageProps, 'path'>> = ({path}) => {
  /**
   * Signature for the query of image paths matching section data
   */
  interface ImagesQuery {
    nodes: Array<{
      id: number;
      publicURL: string;
      name: string;
    }>;
  }

  /**
   * Query signature for the section data that includes images
   */
  interface SectionInfoJson {
    nodes: Array<{
      id: number;
      image?: string;
      icon?: string;
      title: string;
      description: string;
    }>;
  }

  /**
   * Query signature of the JSON file containing the subcription section data
   */
  interface SubDetailsJson {
    nodes: Array<{
      id: number;
      step: number;
      title: string;
      description: string;
    }>;
  }

  /**
   * Signature for any static query of just the publicURL path
   */
  interface SingleFileURL {
    publicURL: string;
  }
  interface HomeData {
    allCollectionInfoJson: SectionInfoJson;
    allFeaturesInfoJson: SectionInfoJson;
    allSubDetailsJson: SubDetailsJson;
    CollectionImages: ImagesQuery;
    FeaturesImages: ImagesQuery;
    CoffeePressMobileImg: SingleFileURL;
    CoffeePressTabletImg: SingleFileURL;
    CoffeePressDesktopImg: SingleFileURL;
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
    CoffeePressMobileImg: {publicURL: coffeeMobileImg},
    CoffeePressTabletImg: {publicURL: coffeeTabletImg},
    CoffeePressDesktopImg: {publicURL: coffeeDesktopImg},
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
      CollectionImages: allFile(filter: {relativeDirectory: {eq: "home/collection"}}) {
        nodes {
          id
          publicURL
          name
        }
      }
      FeaturesImages: allFile(filter: {relativeDirectory: {eq: "home/features"}}) {
        nodes {
          id
          publicURL
          name
        }
      }
      CoffeePressMobileImg: file(name: {regex: "/coffeepress-mobile/"}) {
        publicURL
      }
      CoffeePressTabletImg: file(name: {regex: "/coffeepress-tablet/"}) {
        publicURL
      }
      CoffeePressDesktopImg: file(name: {regex: "/coffeepress-desktop/"}) {
        publicURL
      }
    }
  `);

  /*
   * TODO: Create a Context in the layout component to pass the following data through to the hero component
   */
  const indexHero = {
    pagePath: path,
    title: 'Great coffee made simple.',
    description:
      'Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.',
    imageSet: {
      base: coffeeMobileImg,
      md: coffeeTabletImg,
      xl: coffeeDesktopImg,
    },
  };

  // For use with collectionInfo and featureInfo scroll reveals
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <Layout heroData={indexHero}>
      <Seo title="Home" />
      {/* == Collection Section == */}
      <MainSection>
        <Heading
          bgGradient={{
            md: 'linear(gray.500 25%, transparent)',
            xl: 'linear(gray.500 50%, transparent)',
          }}
          bgColor={{base: 'gray.500', md: 'transparent'}}
          bgClip="text"
          fill="transparent"
          filter={{md: 'opacity(0.5)', xl: 'opacity(0.8)'}}
          fontSize={{base: '40px', md: '96px', xl: '150px'}}
          lineHeight={{base: '72px', xl: '7rem'}}
          marginBottom="8"
          position={{md: 'absolute'}}
          textTransform="lowercase"
          zIndex={{md: '-1'}}
        >
          Our Collection
        </Heading>
        <Stack
          as={List}
          spacing={{base: '56px', xl: '8'}}
          overflow="visible"
          maxWidth="full"
          paddingX={{md: '56px'}}
          direction={{base: 'column', xl: 'row'}}
        >
          {collectionInfo.map(({id, image, title, description}, index) => {
            // Match png name value from 'home/collection' to 'image' value
            const picture = collectionImages.find(({name}) => name === image);
            return (
              <Box
                as={ListItem}
                key={id}
                display="flex"
                flexDirection={{base: 'column', md: 'row', xl: 'column'}}
                alignItems="center"
                paddingX={['24px', '0']}
                data-sal={index % 2 && isLessThan1280 ? 'slide-left' : 'slide-right'}
                data-sal-duration="1000"
              >
                <Image src={picture?.publicURL} height="184px" />
                <Box textAlign={{md: 'left', xl: 'center'}} marginLeft={{md: '36px', xl: 0}} maxWidth="255px">
                  <Heading as="h3" size="xl" textTransform="capitalize" mb={{base: '4', md: '6'}}>
                    {title}
                  </Heading>
                  <Text>{description}</Text>
                </Box>
              </Box>
            );
          })}
        </Stack>
      </MainSection>
      {/* == Feature section == */}
      <MainSection color="white">
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
          <VStack spacing="6" marginBottom="72px" maxWidth="540px" mx="auto">
            <Heading>Why choose us?</Heading>
            <Text>
              A large part of our role is choosing which particular coffees will be featured in our range.
              This means working closely with the best coffee growers to give you a more impactful experience
              on every level.
            </Text>
          </VStack>
          <Stack as={List} spacing="6" direction={{base: 'column', xl: 'row'}}>
            {featuresInfo.map(({icon, title, description, id}, index) => {
              // Matching svg name value from 'home/features' to the 'icon' value
              const imageSVG = featuresImages.find(({name}) => icon === name);
              return (
                <Center
                  key={id}
                  as={ListItem}
                  borderRadius="8px"
                  flexDirection={{base: 'column', md: 'row', xl: 'column'}}
                  bg="brand.500"
                  padding={{base: '58px 24px', md: '42px 48px 42px 17px', xl: '72px 48px 56px'}}
                  data-sal={index % 2 && isLessThan1280 ? 'flip-down' : 'flip-up'}
                  data-sal-duration="1000"
                >
                  <Center width={{md: '165px'}} flexShrink={0}>
                    <Image
                      src={imageSVG?.publicURL}
                      alt=""
                      height={{base: '72px', md: '14', xl: '72px'}}
                      width="auto"
                      marginBottom={{base: '14', md: '0', xl: '14'}}
                    />
                  </Center>
                  <Box textAlign={{md: 'left', xl: 'center'}}>
                    <Heading as="h3" size="xl" textTransform="capitalize" mb="4">
                      {title}
                    </Heading>
                    <Text>{description}</Text>
                  </Box>
                </Center>
              );
            })}
          </Stack>
        </Box>
      </MainSection>
      {/* == Subscription Details section == */}
      <MainSection alignItems={{xl: 'flex-start'}} paddingX={{xl: '88px'}}>
        <Heading
          fontSize="1.5rem"
          lineHeight="32px"
          color="gray.500"
          marginBottom={{base: '92px', md: '60px'}}
          alignSelf={{md: 'flex-start'}}
        >
          How it works
        </Heading>
        <Stack as={List} spacing={{base: '72px', md: '0'}} direction={{base: 'column', md: 'row'}}>
          {subDetails.map(({id, step, title, description}) => (
            <Flex
              as={ListItem}
              key={id}
              flexDirection="column"
              alignItems={{base: 'center', md: 'flex-start'}}
              textAlign={{md: 'left'}}
              position="relative"
              paddingTop={{md: '72px'}}
              maxWidth="380px"
              paddingRight={{xl: '84px !important'}}
              // Creates the circle in the upper left of the list item
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
              <Heading as="h3" size="xl" marginBottom="6" lineHeight="1.5" width={{md: '206px'}}>
                {title}
              </Heading>
              <Text>{description}</Text>
            </Flex>
          ))}
        </Stack>
        <Link
          as={GatsbyLink}
          to="/subscribe"
          mt={{base: '20', md: '6', xl: '72px'}}
          alignSelf={{base: 'center', md: 'flex-start'}}
          variant="primaryButton"
        >
          Create your plan
        </Link>
      </MainSection>
    </Layout>
  );
};

export default IndexPage;
