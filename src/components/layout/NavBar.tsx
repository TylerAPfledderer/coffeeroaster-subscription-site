import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { Box, Button, Container, Flex, useDisclosure, useMediaQuery, VisuallyHidden } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import NavList from './NavList';

/**
 * Component at the top of the page wrapping
 * the logo and the main navigation
 */
const NavBar: React.FC = () => {
  // Toggling Nav Menu (on the small screen)
  const { isOpen: isMenuOpen, onToggle: setMenuToggle } = useDisclosure();
  const [isGreaterThan768] = useMediaQuery('(min-width: 768px)');

  // Check for client to be mounted (hydration)
  const [mounted, setMounted] = useState(false);

  // Check if client has been re-hydrated
  useEffect(() => {
    setMounted(true);
  }, []);

  // This check for visible nav menu is to prevent a mismatch between the client and server
  // with useMediaQuery (see docs warning: https://chakra-ui.com/docs/hooks/use-media-query#return-value)
  //
  // Check used to provide change in styled visibility with either the toggling of the nav in mobile or ensure visibility when on a tablet or larger screen
  const isVisibleNav = mounted && (isGreaterThan768 || isMenuOpen);
  return (
    <Box position="fixed" top="0" left="0" zIndex="docked" width="full">
      <Flex justifyContent="space-between" alignItems="center" py="4" bg="white" layerStyle="layoutBase">
        <Box w={{ base: '162px', md: '235px' }}>
          <Logo />
        </Box>
        <Button
          bg="transparent"
          display={{ md: 'none' }}
          onClick={setMenuToggle}
          aria-expanded={isMenuOpen}
          data-testid="nav-button"
        >
          <VisuallyHidden>Main Menu</VisuallyHidden>
          {isMenuOpen ? <CloseIcon data-testid="close-nav-icon" /> : <HamburgerIcon data-testid="open-nav-icon" />}
        </Button>
        <Container
          as="nav"
          position={{ base: 'fixed', md: 'static' }}
          display="flex"
          justifyContent={{ base: 'center', md: 'revert' }}
          pt={{ base: '40px', md: 0 }}
          padding={{ md: 0 }}
          margin={{ md: 0 }}
          width={{ base: 'full', md: 'auto' }}
          maxW="full"
          height={{ base: '100vh', md: 'auto' }}
          overflow="hidden"
          top="72px"
          left="0"
          bgGradient="linear(#fff 50%, transparent)"
          transition="max-height .3s, opacity .5s"
          zIndex="overlay"
          layerStyle={isVisibleNav ? 'navOpened' : 'navClosed'}
        >
          <NavList
            listStyleType="none"
            textTransform="uppercase"
            direction={{ base: 'column', md: 'row' }}
            alignItems="center"
            spacing="8"
            fontSize={{ base: '24px', md: '16px' }}
            fontWeight={{ md: 'bold' }}
            color={{ md: 'darkGray.500' }}
          />
        </Container>
      </Flex>
    </Box>
  );
};

export default NavBar;
