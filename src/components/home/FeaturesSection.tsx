import { Box, VStack, Heading, Stack, List, Center, ListItem, Text, Image, useMediaQuery } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { ImagesQuery, SectionInfoJson } from 'types/interfaces';
import MainSection from '../MainSection';

const FeaturesSection: React.FC = () => {
  // For use with collectionInfo and featureInfo scroll reveals
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  interface FeatureData {
    allFeaturesInfoJson: SectionInfoJson;
    FeaturesImages: ImagesQuery;
  }

  const {
    allFeaturesInfoJson: { nodes: featuresInfo },
    FeaturesImages: { nodes: featuresImages },
  }: FeatureData = useStaticQuery(graphql`
    query {
      allFeaturesInfoJson {
        nodes {
          id
          icon
          title
          description
        }
      }
      FeaturesImages: allFile(filter: { relativeDirectory: { eq: "home/features" } }) {
        nodes {
          id
          publicURL
          name
        }
      }
    }
  `);
  return (
    <MainSection color="white">
      <Box
        bg="darkGray.500"
        borderRadius="10px"
        height={{ base: '902px', md: '573px' }}
        position="absolute"
        zIndex="-2"
        top="0"
        width="full"
      />
      <Box px={{ base: '6', md: '14' }} pt="16">
        <VStack spacing="6" marginBottom="72px" maxWidth="540px" mx="auto">
          <Heading>Why choose us?</Heading>
          <Text>
            A large part of our role is choosing which particular coffees will be featured in our range. This means
            working closely with the best coffee growers to give you a more impactful experience on every level.
          </Text>
        </VStack>
        <Stack as={List} spacing="6" direction={{ base: 'column', xl: 'row' }}>
          {featuresInfo.map(({ icon, title, description, id }, index) => {
            // Matching svg name value from 'home/features' to the 'icon' value
            const imageSVG = featuresImages.find(({ name }) => icon === name);
            return (
              <Center
                key={id}
                as={ListItem}
                borderRadius="8px"
                flexDirection={{ base: 'column', md: 'row', xl: 'column' }}
                bg="brand.500"
                padding={{ base: '58px 24px', md: '42px 48px 42px 17px', xl: '72px 48px 56px' }}
                data-sal={index % 2 && isLessThan1280 ? 'flip-down' : 'flip-up'}
                data-sal-duration="1000"
              >
                <Center width={{ md: '165px' }} flexShrink={0}>
                  <Image
                    src={imageSVG?.publicURL}
                    alt=""
                    height={{ base: '72px', md: '14', xl: '72px' }}
                    width="auto"
                    marginBottom={{ base: '14', md: '0', xl: '14' }}
                  />
                </Center>
                <Box textAlign={{ md: 'left', xl: 'center' }}>
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
  );
};

export default FeaturesSection;
