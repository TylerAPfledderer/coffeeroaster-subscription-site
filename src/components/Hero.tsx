import React from 'react';
import {Box, Button, Flex, Heading, Text} from '@chakra-ui/react';
import {Link as GatsbyLink} from 'gatsby';
import {LocationProps} from '../types/interfaces';
import {HeroDataProps} from './layout';

interface HeroProps extends LocationProps, HeroDataProps {}

const Hero: React.FC<HeroProps> = ({
  pagePath,
  heroData: {title, description, imageSet},
}) => (
  <Flex
    as="section"
    direction="column"
    alignItems={{base: 'center', md: 'flex-start'}}
    bgImage={imageSet}
    bgPos="right"
    bgSize="cover"
    bgRepeat="no-repeat"
    color="white"
    textAlign={{md: 'left'}}
    padding={{base: '100px 24px', md: '100px 56px'}}
    borderRadius="10px"
    marginTop="76px"
  >
    <Box maxW="398px">
      <Heading as="h1" size="4xl" mb="6">
        {title}
      </Heading>
      <Text maxWidth="445px">{description}</Text>
      {pagePath === '/' && (
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
    </Box>
  </Flex>
);

export default Hero;
