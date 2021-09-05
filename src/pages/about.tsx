import {Box, Flex, Heading, Text} from '@chakra-ui/layout';
import {Image} from '@chakra-ui/react';
import MainSection from '../components/MainSection';
import {graphql, PageProps, useStaticQuery} from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage: React.FC<PageProps> = () => {
  const {
    WhitecupMobileImg: {publicURL: whitecupMobile},
    WhitecupTabletImg: {publicURL: whitecupTablet},
    WhitecupDesktopImg: {publicURL: whitecupDesktop},
    CommitmentHeaderMobileImg: {publicURL: commitmentHeaderMobile},
    CommitmentHeaderTabletImg: {publicURL: commitmentHeaderTablet},
    CommitmentHeaderDesktopImg: {publicURL: commitmentHeaderDesktop},
  } = useStaticQuery(graphql`
    query AboutDataQuery {
      WhitecupMobileImg: file(name: {regex: "/whitecup-mobile/"}) {
        publicURL
      }
      WhitecupTabletImg: file(name: {regex: "/whitecup-tablet/"}) {
        publicURL
      }
      WhitecupDesktopImg: file(name: {regex: "/whitecup-desktop/"}) {
        publicURL
      }
      CommitmentHeaderMobileImg: file(name: {regex: "/image-commitment-mobile/"}) {
        publicURL
      }
      CommitmentHeaderTabletImg: file(name: {regex: "/image-commitment-tablet/"}) {
        publicURL
      }
      CommitmentHeaderDesktopImg: file(name: {regex: "/image-commitment-desktop/"}) {
        publicURL
      }
    }
  `);

  const aboutHero = {
    title: 'About Us',
    description:
      'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.',
    imageSet: {
      base: whitecupMobile,
      md: whitecupTablet,
      xl: whitecupDesktop,
    },
  };
  return (
    <Layout heroData={aboutHero}>
      <Seo title="About Us" />
      {/* Commitment Statement section */}
      <MainSection>
        <Flex
          paddingX={{md: '56px', xl: '88px'}}
          flexDirection={{base: 'column', md: 'row'}}
          justifyContent="space-between"
          alignItems="inherit"
          width="full"
        >
          <Image
            src={commitmentHeaderMobile}
            srcSet={`${commitmentHeaderDesktop} 445w,
              ${commitmentHeaderTablet} 281w,
              ${commitmentHeaderMobile} 654w`}
            sizes="(min-width: 1440px) 445px,
            (min-width: 768px) 281px,
            654px"
            borderRadius="8px"
            fit="cover"
            objectPosition="top center"
            width="full"
            maxWidth={{base: '327px', md: '281px', lg: '445px'}}
            height={{base: '400px', md: '470px', lg: '520px'}}
            mb={{base: '48px', md: 0}}
            mr={{md: '40px', xl: '128px'}}
          />
          <Box textAlign={{xl: 'left'}}>
            <Heading mb={{base: '10', md: '6'}}>Our Commitment</Heading>
            <Text>
              We’re built on a simple mission and a commitment to doing good along the way. We want to make it
              easy for you to discover and brew the world’s best coffee at home. It all starts at the source.
              To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to
              understand the challenges and opportunities in each of these places. We collaborate with
              exceptional coffee growers and empower a global community of farmers through with well above
              fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in
              coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting
              profiles distinctive to their native growing region.
            </Text>
          </Box>
        </Flex>
      </MainSection>
      {/* TODO: Quality Statement section */}
      <MainSection>Quality Statement</MainSection>
      {/* TODO: Headquarters list section
       * - Provide the list via JSON query
       * - Contains svg, name of country, street, city, state, and phone number
       */}
      <MainSection>Headquarters</MainSection>
    </Layout>
  );
};

export default AboutPage;
