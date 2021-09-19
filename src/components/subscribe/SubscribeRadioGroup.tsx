import React from 'react';
import { useRadioGroup, Text, Heading, Stack } from '@chakra-ui/react';
import SubscribeRadioCard from './SubscribeRadioCard';

export interface SubscribeRadioGroupProps {
  groupName: string;
  radioOptions: Array<{
    name: string;
    ariaHeadingLabel?: string;
    description: string;
  }>;
}

/**
 * Convert a normal string to kebab-case
 */
const toKebabCase = (str: string) => str.toLowerCase().replace(/[' ']+/g, '-');

const SubscribeRadioGroup: React.FC<SubscribeRadioGroupProps> = ({ groupName, radioOptions }) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: groupName,
    defaultValue: toKebabCase(radioOptions[0].name),
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
