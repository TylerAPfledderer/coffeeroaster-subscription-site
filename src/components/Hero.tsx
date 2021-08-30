import React, {useContext} from 'react';
import {Box, Flex, Heading, Link, Text} from '@chakra-ui/react';
import {Link as GatsbyLink} from 'gatsby';
import {HeroContext} from './layout';

const Hero: React.FC = () => {
  const {title, description, imageSet, pagePath} = useContext(HeroContext);

  return (
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
      padding={{base: '100px 24px', md: '100px 56px', xl: '100px 88px'}}
      borderRadius="10px"
      marginTop="76px"
    >
      <Box width="clamp(17.44rem, 20vw + 12.8rem, 30.75rem)">
        <Heading as="h1" size="4xl" mb="6">
          {title}
        </Heading>
        <Text maxWidth="445px">{description}</Text>
        {pagePath === '/' && (
          <Link as={GatsbyLink} to="/subscribe" mt="48px" data-testid="hero-button" variant="primaryButton">
            Create your plan
          </Link>
        )}
      </Box>
    </Flex>
  );
};

export default Hero;
