import { Box } from '@chakra-ui/react';
import React, { createContext } from 'react';
import Header from './Header';
import Footer from './Footer';
import NavBar from './NavBar';

interface HeroData {
  pagePath?: string;
  title: string;
  description: string;
  imageSet: {
    base: string;
    md: string;
    xl: string;
  }; // Extending Chakra's bgImage prop types
}

export const HeroContext = createContext<HeroData>({
  pagePath: undefined,
  title: '',
  description: '',
  imageSet: {
    base: '',
    md: '',
    xl: '',
  },
});

interface LayoutProps {
  /**
   * Content for the Hero component
   * @property {string | undefined} pagePath - If page is index, then path of the page. Else undefined.
   * @property {string} title - Title on the hero.
   * @property {string} description - Description on the hero.
   * @property {string} imageSet - Background images for the hero based on breakpoints.
   */
  heroData: HeroData;
}

/**
 * Wrapper component containing the Navbar, Header, and Footer
 * @param {typeof children} children - React node placed in the main element
 * @param {HeroContext} heroData - Data for the hero section
 */
const Layout: React.FC<LayoutProps> = ({ children, heroData }) => (
  <HeroContext.Provider value={heroData}>
    <Box
      textAlign="center"
      // ? Having to add this overflow for the scroll reveal seems like a bug
      overflowX="hidden"
      layerStyle="layoutBase"
    >
      <NavBar />
      <Header />
      <Box as="main" sx={{ '& > section': { layerStyle: 'mainSection' } }}>
        {children}
      </Box>
      <Footer />
    </Box>
  </HeroContext.Provider>
);

export default Layout;
