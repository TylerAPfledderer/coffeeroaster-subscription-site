import {useMediaQuery, Box, Heading, List, ListItem, Stack, Text, Image} from '@chakra-ui/react';
import MainSection from '../MainSection';
import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import {ImagesQuery, SectionInfoJson} from 'types/interfaces';

const CollectionSection: React.FC = () => {
  // For use with collectionInfo and featureInfo scroll reveals
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  interface CollectionData {
    allCollectionInfoJson: SectionInfoJson;
    CollectionImages: ImagesQuery;
  }

  const {
    allCollectionInfoJson: {nodes: collectionInfo},
    CollectionImages: {nodes: collectionImages},
  }: CollectionData = useStaticQuery(graphql`
    query {
      allCollectionInfoJson {
        nodes {
          id
          image
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
    }
  `);
  return (
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
  );
};

export default CollectionSection;
