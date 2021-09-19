import React, { createContext, Dispatch, SetStateAction } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Button, Box, HStack, VStack, Accordion } from '@chakra-ui/react';
import SubscribeOrderSummary from './SubscribeOrderSummary';
import SubscribFormItem from './SubscribeFormItem';
import MainSection from '../MainSection';
import useLocalStorage from '../../hooks/useLocalStorage';

export type currValOptions = 'drinking-style' | 'coffee-type' | 'coffee-size' | 'bean-style' | 'delivery-interval';

type CurrInputValTypes = {
  currInputVals: Record<currValOptions, string>;
};
interface FormValuesCtxProps extends CurrInputValTypes {
  setCurrInputVals: Dispatch<SetStateAction<Record<string, string>>>;
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
});

const SubscribeForm: React.FC = () => {
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
          }>;
        };
      }>;
    };
  }

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
            }
          }
        }
      }
    }
  `);

  // eslint-disable-next-line arrow-body-style
  const reduceDefaultOptionNames = () => {
    // Reduce the array of form options down to an object with the groupName as the key and the first radioOptions' name as the value
    return formOptionDetails.reduce<Record<string, string>>((group, { radioGroupDetails }) => {
      const { groupName, radioOptions } = radioGroupDetails;
      return { ...group, [groupName]: radioOptions[0].name };
    }, {});
  };

  /**
   * State for the currently selected values in each radio group, stored in local storage
   */
  const [currInputVals, setCurrInputVals] = useLocalStorage('currentInputVals', reduceDefaultOptionNames());

  return (
    <MainSection>
      <HStack as="form" width="full" textAlign={{ md: 'left' }} maxWidth="730px">
        <FormValuesContext.Provider value={{ currInputVals, setCurrInputVals }}>
          <Box>
            <Accordion as={VStack} spacing="96px" alignItems="normal" allowToggle allowMultiple defaultIndex={[0]}>
              {
                // Iterate the Form option data from query to the form item components
                formOptionDetails.map(({ id, name, radioGroupDetails }) => (
                  <SubscribFormItem key={id} heading={name} radioGroup={radioGroupDetails} />
                ))
              }
            </Accordion>
            <SubscribeOrderSummary marginTop="120px" />
            <Button variant="solid" colorScheme="brand" mt="56px" px="36px" py="24px">
              Create my plan!
            </Button>
          </Box>
        </FormValuesContext.Provider>
      </HStack>
    </MainSection>
  );
};

export default SubscribeForm;
