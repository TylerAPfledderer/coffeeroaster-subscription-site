import {Box, FormControl, Input, useRadio, UseRadioProps, VStack} from '@chakra-ui/react';
import React from 'react';

interface SubscribeRadioCardProps extends UseRadioProps {
  ariaHeadingLabel?: string;
}

const SubscribeRadioCard: React.FC<SubscribeRadioCardProps> = (props) => {
  const {getInputProps, getCheckboxProps} = useRadio(props);

  /**
   * Callback return of the common html attributes associated with checkboxes and radios.
   * This updates on change of state with the input
   */
  const inputProps = getInputProps();
  /**
   * Callback return of the common html attributes associated with checkboxes and radios.
   * This updates on change of state with the input
   */
  const checkboxProps = getCheckboxProps();

  return (
    <Box as="label" margin="0" textAlign="left">
      {/*
        // ! Do not use the 'FormLabel' component as it will override state used to evaluate if an input was checked
      */}
      <FormControl as={Input} {...inputProps} aria-label={props.ariaHeadingLabel} />
      <VStack
        {...checkboxProps}
        cursor="pointer"
        padding="24px"
        borderRadius="8px"
        background="accentSecondary.500"
        spacing="24px"
        alignItems="flex-start"
        // Ensure that the description elements stay inline if the headings wrap
        justifyContent="space-between"
        // Without 100% height when the cards are in a row, these visible divs will not consistently
        // stretch to the height of the group's parent.
        height="100%"
        aria-hidden="false"
        _checked={{
          background: 'brand.500',
          color: 'white',
          cursor: 'default',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        _hover={{
          '&:not([data-checked])': {
            background: 'accentPrimary.500',
          },
        }}
      >
        {props.children}
      </VStack>
    </Box>
  );
};

export default SubscribeRadioCard;
