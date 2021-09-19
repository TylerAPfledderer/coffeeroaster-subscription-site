import React, { useContext } from 'react';
import { useRadioGroup, Text, Heading, Stack } from '@chakra-ui/react';
import SubscribeRadioCard from './SubscribeRadioCard';
import { currValOptions, FormValuesContext } from './SubscribeForm';

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
 * Convert a normal string to kebab-case
 */
const toKebabCase = (str: string) => str?.toLowerCase().replace(/[' ']+/g, '-');

const SubscribeRadioGroup: React.FC<SubscribeRadioGroupProps> = ({ groupName, radioOptions }) => {
  const { currInputVals, setCurrInputVals } = useContext(FormValuesContext);

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: groupName,
    defaultValue: toKebabCase(currInputVals[groupName]),
    onChange: (nextValue) =>
      setCurrInputVals((prevState) => ({
        ...prevState,
        [groupName]: nextValue,
      })),
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
