import React from 'react';
import {
  Box,
  Center,
  Flex,
  Heading,
  Link,
  List,
  Stack,
  Text,
  VStack,
  Image,
  ListItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import { graphql, PageProps, useStaticQuery } from 'gatsby';
import MainSection from '../components/MainSection';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage: React.FC<PageProps> = () => {
  const {
    WhitecupMobileImg: { publicURL: whitecupMobile },
    WhitecupTabletImg: { publicURL: whitecupTablet },
    WhitecupDesktopImg: { publicURL: whitecupDesktop },
    CommitmentHeaderMobileImg: { publicURL: commitmentHeaderMobile },
    CommitmentHeaderTabletImg: { publicURL: commitmentHeaderTablet },
    CommitmentHeaderDesktopImg: { publicURL: commitmentHeaderDesktop },
    QualityHeaderDesktopImg: { publicURL: qualityHeaderDesktop },
    QualityHeaderTabletImg: { publicURL: qualityHeaderTablet },
    QualityHeaderMobileImg: { publicURL: qualityHeaderMobile },
    HeadquarterSVGs: { nodes: headquarterSVGs },
    HeadquarterInfoJson: { nodes: headquarterInfo },
  } = useStaticQuery(graphql`
    query AboutDataQuery {
      WhitecupMobileImg: file(name: { regex: "/whitecup-mobile/" }) {
        publicURL
      }
      WhitecupTabletImg: file(name: { regex: "/whitecup-tablet/" }) {
        publicURL
      }
      WhitecupDesktopImg: file(name: { regex: "/whitecup-desktop/" }) {
        publicURL
      }
      CommitmentHeaderMobileImg: file(name: { regex: "/image-commitment-mobile/" }) {
        publicURL
      }
      CommitmentHeaderTabletImg: file(name: { regex: "/image-commitment-tablet/" }) {
        publicURL
      }
      CommitmentHeaderDesktopImg: file(name: { regex: "/image-commitment-desktop/" }) {
        publicURL
      }
      QualityHeaderDesktopImg: file(name: { regex: "/image-quality-desktop/" }) {
        publicURL
      }
      QualityHeaderTabletImg: file(name: { regex: "/image-quality-tablet/" }) {
        publicURL
      }
      QualityHeaderMobileImg: file(name: { regex: "/image-quality-mobile/" }) {
        publicURL
      }
      HeadquarterSVGs: allFile(filter: { relativeDirectory: { eq: "about/headquarters" } }) {
        nodes {
          publicURL
          name
          id
        }
      }
      HeadquarterInfoJson: allHeadquarterInfoJson {
        nodes {
          id
          state
          street
          tel
          city
          country
        }
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

  const commitmentImageSrc = useBreakpointValue({
    base: commitmentHeaderMobile,
    md: commitmentHeaderTablet,
    lg: commitmentHeaderDesktop,
  });
  const qualityImageSrc = useBreakpointValue({
    base: qualityHeaderMobile,
    md: qualityHeaderTablet,
    xl: qualityHeaderDesktop,
  });
  interface HQInfoProps {
    id: number;
    country: string;
    street: string;
    city: string;
    state: string;
    tel: string;
  }

  return (
    <Layout heroData={aboutHero}>
      <Seo title="About Us" />
      {/* Commitment Statement section */}
      <MainSection
        paddingX={{ lg: '48px', xl: '88px' }}
        justifyContent="space-between"
        flexDirection={{ base: 'column', md: 'row' }}
        sx={{ '& > *': { flex: 1 } }}
      >
        <Box mb={{ base: '48px', md: 0 }} mr={{ md: '40px', xl: '128px' }} maxWidth={{ base: '327px', xl: '445px' }}>
          <Image src={commitmentImageSrc} borderRadius="8px" objectFit="cover" width="full" />
        </Box>
        <Flex
          flexDirection="column"
          alignItems={{ base: 'center', md: 'flex-start' }}
          textAlign={{ md: 'left' }}
          minWidth={{ md: '339px' }}
          maxWidth="max-content"
        >
          <Heading mb={{ base: '10', md: '6' }}>Our Commitment</Heading>
          <Text>
            We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for
            you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the
            specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and
            opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global
            community of farmers through with well above fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each
            lot to highlight tasting profiles distinctive to their native growing region.
          </Text>
        </Flex>
      </MainSection>
      {/* Quality Statement section */}
      <MainSection color="white">
        <Box
          bg="darkGray.500"
          position="absolute"
          zIndex="-2"
          bottom="0"
          width="full"
          height={{ base: 'calc(100% - 80px)', md: 'calc(100% - 160px)', xl: 'calc(100% - 88px)' }}
          borderRadius="10px"
        />
        <Stack
          paddingX={{ base: '24px', md: '56px', xl: '88px' }}
          paddingBottom={{ base: '64px', xl: 0 }}
          width="full"
          spacing="64px"
          alignItems="center"
          justifyContent="space-between"
          direction={{ base: 'column', xl: 'row-reverse' }}
        >
          <Image
            src={qualityImageSrc}
            borderRadius="8px"
            width="full"
            maxWidth={{ base: '552px', xl: '445px' }}
            marginBottom={{ xl: '88px' }}
          />
          <VStack spacing="6" textAlign={{ xl: 'left' }} alignItems={{ xl: 'flex-start' }}>
            <Heading>Uncompromised quality</Heading>
            <Text>
              Although we work with growers who pay close attention to all stages of harvest and processing, we employ,
              on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag
              of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly
              coffee, so that brewing is easy and enjoyable.
            </Text>
          </VStack>
        </Stack>
      </MainSection>
      {/* TODO: Headquarters list section
       * - Provide the list via JSON query
       * - Contains svg, name of country, street, city, state, and phone number
       */}
      <MainSection paddingX={{ xl: '88px' }}>
        <Heading
          fontSize="1.5rem"
          lineHeight="32px"
          color="gray.500"
          marginBottom={{ base: '72px', md: '60px' }}
          alignSelf={{ md: 'flex-start' }}
        >
          Our headquarters
        </Heading>
        <Stack as={List} spacing={{ base: '88px', md: '72px' }} direction={{ base: 'column', md: 'row' }} width="full">
          {headquarterInfo.map(({ id, country, street, city, state, tel }: HQInfoProps) => {
            const { publicURL } = headquarterSVGs.find(
              ({ name }: { name: string }) => name.replace(/-/, ' ') === country.toLowerCase()
            );
            return (
              <VStack
                key={id}
                as={ListItem}
                spacing="12"
                alignItems={{ base: 'center', md: 'flex-start' }}
                textAlign={{ md: 'left' }}
                flex="1"
              >
                <Center maxW="40px" flexBasis="48px">
                  <Image src={publicURL} width="full" />
                </Center>
                <VStack spacing="6" alignItems="inherit">
                  <Heading as="span" display="block">
                    {country}
                  </Heading>
                  <Text>
                    {street}
                    <br />
                    {city}
                    <br />
                    {state}
                    <br />
                    <Link href={`tel:${tel}`} isExternal>
                      {tel}
                    </Link>
                  </Text>
                </VStack>
              </VStack>
            );
          })}
        </Stack>
      </MainSection>
    </Layout>
  );
};

export default AboutPage;
