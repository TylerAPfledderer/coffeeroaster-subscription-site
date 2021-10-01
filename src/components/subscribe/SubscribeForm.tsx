import React, { createContext, Dispatch, SetStateAction } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Box, HStack, VStack, Accordion, useDisclosure, Heading } from '@chakra-ui/react';
import OrderSummary from './OrderSummary';
import SubscribFormItem from './SubscribeFormItem';
import MainSection from '../MainSection';
import CheckoutModal from './CheckoutModal';
import useCurrentInputValues from '../../hooks/useCurrentInputValues';
import { toKebabCase } from '../../utils/functions';

export type currValOptions = 'drinking-style' | 'coffee-type' | 'coffee-size' | 'bean-style' | 'delivery-interval';
interface AllFormOptionProps {
  allFormOptionsJson: {
    nodes: Array<{
      id: string;
      name: string;
      radioGroupDetails: {
        groupName: currValOptions;
        radioOptions: Array<{
          name: string;
          description: string;
          ariaHeadingLabel?: string;
          price?: number;
        }>;
      };
    }>;
  };
}

type CurrInputValTypes = {
  currInputVals: Record<currValOptions, string>;
};
interface FormValuesCtxProps extends CurrInputValTypes {
  setCurrInputVals: Dispatch<SetStateAction<Record<string, string>>>;
  formOptionDetails: AllFormOptionProps['allFormOptionsJson']['nodes'];
  resetInputVals: () => void;
}

export const FormValuesContext = createContext<FormValuesCtxProps>({
  currInputVals: {
    'drinking-style': '',
    'coffee-type': '',
    'coffee-size': '',
    'bean-style': '',
    'delivery-interval': '',
  },
  setCurrInputVals: () => {
    ('');
  },
  formOptionDetails: [],
  resetInputVals: () => {
    ('');
  },
});

/**
 * Form for the subscription options
 *
 * Pulls JSON Data via static query that provides the content for each group of options
 */
const SubscribeForm: React.FC = () => {
  // Query from json all data to create the radio input groups
  // for the subscription form
  const {
    allFormOptionsJson: { nodes: formOptionDetails },
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
              price
            }
          }
        }
      }
    }
  `);

  // Reduce the array of form options down to an object with the groupName as the key and the first radioOptions' name as the value
  const reduceDefaultOptionNames = () =>
    formOptionDetails.reduce<Record<string, string>>((group, { radioGroupDetails }) => {
      const { groupName, radioOptions } = radioGroupDetails;
      return { ...group, [groupName]: toKebabCase(radioOptions[0].name) };
    }, {});

  /**
   * State for the currently selected values in each radio group, stored in local storage
   */
  const [currInputVals, setCurrInputVals, resetInputVals] = useCurrentInputValues<Record<string, string>>(
    'currentInputVals',
    reduceDefaultOptionNames()
  );
  const { isOpen, onClose, onToggle } = useDisclosure();

  return (
    <MainSection>
      <HStack as="form" width="full" textAlign={{ md: 'left' }} maxWidth="730px">
        <FormValuesContext.Provider value={{ currInputVals, setCurrInputVals, formOptionDetails, resetInputVals }}>
          <Box>
            <Accordion as={VStack} spacing="96px" alignItems="normal" allowToggle allowMultiple defaultIndex={[0]}>
              {
                // Iterate the Form option data from query to the form item components
                formOptionDetails.map(({ id, name, radioGroupDetails }) => (
                  <SubscribFormItem key={id} heading={name} radioGroup={radioGroupDetails} />
                ))
              }
            </Accordion>
            <Box
              background="darkGray.500"
              textAlign="left"
              paddingTop="32px"
              paddingBottom={{ base: '42px' }}
              paddingX={{ base: '24px', md: '44px' }}
              borderRadius="10px"
              marginTop="120px"
            >
              <Heading as="h2" color="gray.500" fontFamily="body" size="sm" textTransform="uppercase" mb="16px">
                Order Summary
              </Heading>
              <OrderSummary color="white" />
            </Box>
            <Button variant="solid" colorScheme="brand" mt="56px" px="36px" py="24px" onClick={onToggle}>
              Create my plan!
            </Button>
          </Box>
          <CheckoutModal isOpen={isOpen} onClose={onClose} />
        </FormValuesContext.Provider>
      </HStack>
    </MainSection>
  );
};

export default SubscribeForm;
