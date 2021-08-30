import React from 'react';
import {Box} from '@chakra-ui/react';
import Hero from './Hero';

const Header: React.FC = () => (
  <Box as="header" maxW="1440px" mx="auto">
    <Hero />
  </Box>
);

export default Header;
