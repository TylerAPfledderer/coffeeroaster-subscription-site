import React, { useContext } from 'react';
import { useRadioGroup, Text, Heading, Stack } from '@chakra-ui/react';
import SubscribeRadioCard from './SubscribeRadioCard';
import { currValOptions, FormValuesContext } from './SubscribeForm';
import { toKebabCase } from '../../utils/functions';

export interface RadioGroupProps {
  radioOptions: Array<{
    name: string;
    ariaHeadingLabel?: string;
    description: string;
  }>;
  groupName: currValOptions;
}
type SubscribeRadioGroupProps = RadioGroupProps;

/**
 * Component rendering each group of radios in the subscription form
 * @param {string} groupName - name of the group of radios
 * @param {RadioGroupProps.radioOptions} radioOptions - array of radio options to build each radio card
 */
const SubscribeRadioGroup: React.FC<SubscribeRadioGroupProps> = ({ groupName, radioOptions }) => {
  const { currInputVals, setCurrInputVals } = useContext(FormValuesContext);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: groupName,
    onChange: (nextValue) =>
      setCurrInputVals((prevState) => ({
        ...prevState,
        [groupName]: nextValue,
      })),
    // We are in controlled mode because this value can be reset by the user (via "Checkout")
    value: toKebabCase(currInputVals[groupName]),
  });

  const group = getRootProps();

  return (
    <Stack {...group} spacing={{ base: '16px', md: '8px' }} direction={{ base: 'column', md: 'row' }}>
      {radioOptions.map(({ name, ariaHeadingLabel, description }) => {
        const nameValue = name.toLowerCase().replace(/[' ']+/g, '-');
        const radio = getRadioProps({ value: nameValue });
        return (
          <SubscribeRadioCard key={nameValue} {...radio} ariaHeadingLabel={ariaHeadingLabel}>
            <Heading as="span" fontSize="24px">
              {name}
            </Heading>
            <Text>{description}</Text>
          </SubscribeRadioCard>
        );
      })}
    </Stack>
  );
};

export default SubscribeRadioGroup;
