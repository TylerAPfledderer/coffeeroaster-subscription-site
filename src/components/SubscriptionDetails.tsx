import { Flex, Heading, Link, List, ListItem, Stack, Text } from '@chakra-ui/react';
import { graphql, Link as GatsbyLink, useStaticQuery } from 'gatsby';
import React from 'react';
import MainSection from './MainSection';

interface SubscriptionDetailsProps {
  /**
   * If this Component is rendered in the section page...
   * - Certain elements will not be rendered
   * - Different styles are used
   */
  onSubscribePage?: boolean;
}

const defaultProps: SubscriptionDetailsProps = {
  onSubscribePage: true,
};

const SubscriptionDetails: React.FC<SubscriptionDetailsProps> = ({ onSubscribePage }) => {
  /** Throw runtime error if the onSubscribePage prop is not used in the correct place */
  if (onSubscribePage && !window.location.pathname.includes('/subscribe')) {
    throw new Error('onSubscribePage styles and rendering are only for the Subscribe page!');
  }
  interface SubscriptionDetailsData {
    /**
     * Query signature of the JSON file containing the subcription section data
     */
    allSubDetailsJson: {
      nodes: Array<{
        id: number;
        step: number;
        title: string;
        description: string;
      }>;
    };
  }
  const {
    allSubDetailsJson: { nodes: subDetails },
  }: SubscriptionDetailsData = useStaticQuery(graphql`
    query {
      allSubDetailsJson {
        nodes {
          id
          step
          title
          description
        }
      }
    }
  `);

  const subPagePaddingX = onSubscribePage
    ? {
        base: '24px',
        md: '42px',
      }
    : '';
  const subPagePaddingY = onSubscribePage ? '88px' : '';
  const subPageMarginX = onSubscribePage
    ? {
        base: '-24px',
        md: '-42px',
      }
    : '';
  const subPageColor = onSubscribePage ? 'white' : 'initial';
  const subPageBackground = onSubscribePage ? 'darkGray.500' : '';

  return (
    <MainSection
      alignItems={{ xl: 'flex-start' }}
      borderRadius="10px"
      paddingX={{ ...subPagePaddingX, xl: '88px' }}
      paddingY={subPagePaddingY}
      marginX={{ ...subPageMarginX, lg: 0 }}
      color={subPageColor}
      background={subPageBackground}
    >
      {!onSubscribePage && (
        <Heading
          fontSize="1.5rem"
          lineHeight="32px"
          color="gray.500"
          marginBottom={{ base: '92px', md: '60px' }}
          alignSelf={{ md: 'flex-start' }}
        >
          How it works
        </Heading>
      )}
      <Stack
        as={List}
        spacing={{ base: '72px', md: '0' }}
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'center', md: 'normal' }}
      >
        {subDetails.map(({ id, step, title, description }) => (
          <Flex
            as={ListItem}
            key={id}
            flexDirection="column"
            alignItems={{ base: 'center', md: 'flex-start' }}
            textAlign={{ md: 'left' }}
            position="relative"
            paddingTop={{ md: '72px', xl: '96px' }}
            maxWidth="380px"
            paddingRight={{ xl: '84px !important' }}
            // Creates the circle in the upper left of the list item
            _before={{
              md: {
                // eslint-disable-next-line quotes
                content: `""`,
                background: onSubscribePage ? 'darkGray.500' : 'white',
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
                borderTopColor: 'accentPrimary.500',
              },
            }}
          >
            <Text
              color="accentPrimary.500"
              fontFamily="heading"
              fontSize="72px"
              lineHeight="1"
              marginBottom={{ md: '24px' }}
              maxWidth="100%"
            >
              {
                // Add a 0 in front of the iterated number
                `0${step}`
              }
            </Text>
            <Heading as="h3" size="xl" marginBottom="6" lineHeight="1.5" width={{ md: '206px' }}>
              {title}
            </Heading>
            <Text>{description}</Text>
          </Flex>
        ))}
      </Stack>
      {!onSubscribePage && (
        <Link
          as={GatsbyLink}
          to="/subscribe"
          mt={{ base: '20', md: '6', xl: '72px' }}
          alignSelf={{ base: 'center', md: 'flex-start' }}
          variant="primaryButton"
        >
          Create your plan
        </Link>
      )}
    </MainSection>
  );
};

SubscriptionDetails.defaultProps = defaultProps;

export default SubscriptionDetails;
