import {Flex, Heading, Link, List, ListItem, Stack, Text} from '@chakra-ui/react';
import {graphql, Link as GatsbyLink, useStaticQuery} from 'gatsby';
import React from 'react';
import MainSection from './MainSection';

const SubscriptionDetails: React.FC = () => {
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
    allSubDetailsJson: {nodes: subDetails},
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
  return (
    <MainSection alignItems={{xl: 'flex-start'}} paddingX={{xl: '88px'}}>
      <Heading
        fontSize="1.5rem"
        lineHeight="32px"
        color="gray.500"
        marginBottom={{base: '92px', md: '60px'}}
        alignSelf={{md: 'flex-start'}}
      >
        How it works
      </Heading>
      <Stack as={List} spacing={{base: '72px', md: '0'}} direction={{base: 'column', md: 'row'}}>
        {subDetails.map(({id, step, title, description}) => (
          <Flex
            as={ListItem}
            key={id}
            flexDirection="column"
            alignItems={{base: 'center', md: 'flex-start'}}
            textAlign={{md: 'left'}}
            position="relative"
            paddingTop={{md: '72px'}}
            maxWidth="380px"
            paddingRight={{xl: '84px !important'}}
            // Creates the circle in the upper left of the list item
            _before={{
              md: {
                // eslint-disable-next-line quotes
                content: `""`,
                background: 'white',
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
                borderTopColor: 'accent-primary.500',
              },
            }}
          >
            <Text
              color="accent-primary.500"
              fontFamily="heading"
              fontSize="72px"
              lineHeight="1"
              marginBottom={{md: '24px'}}
              maxWidth="100%"
            >
              {
                // Add a 0 in front of the iterated number
                `0${step}`
              }
            </Text>
            <Heading as="h3" size="xl" marginBottom="6" lineHeight="1.5" width={{md: '206px'}}>
              {title}
            </Heading>
            <Text>{description}</Text>
          </Flex>
        ))}
      </Stack>
      <Link
        as={GatsbyLink}
        to="/subscribe"
        mt={{base: '20', md: '6', xl: '72px'}}
        alignSelf={{base: 'center', md: 'flex-start'}}
        variant="primaryButton"
      >
        Create your plan
      </Link>
    </MainSection>
  );
};

export default SubscriptionDetails;
