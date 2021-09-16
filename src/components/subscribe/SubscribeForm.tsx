import MainSection from '../MainSection';
import React from 'react';
import {Accordion} from '@chakra-ui/accordion';
import SubscribFormItem from './SubscribeFormItem';
import {Box, HStack, VStack} from '@chakra-ui/layout';
import SubscribeOrderSummary from './SubscribeOrderSummary';
import {graphql, useStaticQuery} from 'gatsby';
import {Button} from '@chakra-ui/react';

const SubscribeForm: React.FC = () => {
  interface AllFormOptionProps {
    allFormOptionsJson: {
      nodes: Array<{
        id: string;
        name: string;
        radioGroupDetails: {
          groupName: string;
          radioOptions: Array<{
            name: string;
            description: string;
            ariaHeadingLabel?: string;
          }>;
        };
      }>;
    };
  }

  // Query from json all data to create the radio input groups
  // for the subscription form
  const {
    allFormOptionsJson: {nodes: formOptionDetails},
  }: AllFormOptionProps = useStaticQuery(graphql`
    query SubscribeFormQuery {
      allFormOptionsJson {
        nodes {
          id
          name
          radioGroupDetails {
            groupName
            radioOptions {
              name
              description
              ariaHeadingLabel
            }
          }
        }
      }
    }
  `);

  return (
    <MainSection>
      <HStack as="form" width="full" textAlign={{md: 'left'}} maxWidth="730px">
        <Box>
          <Accordion
            as={VStack}
            spacing="96px"
            alignItems="normal"
            allowToggle
            allowMultiple
            defaultIndex={[0]}
          >
            {
              // Iterate the Form option data from query to the form item components
              formOptionDetails.map(({id, name, radioGroupDetails}) => (
                <SubscribFormItem key={id} heading={name} radioGroup={radioGroupDetails} />
              ))
            }
          </Accordion>
          <SubscribeOrderSummary marginTop="120px" />
          <Button variant="solid" colorScheme="brand" mt="56px" px="36px" py="24px">
            Create my plan!
          </Button>
        </Box>
      </HStack>
    </MainSection>
  );
};

export default SubscribeForm;
