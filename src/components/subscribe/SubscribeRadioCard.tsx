import React from 'react';
import { Box, useRadio, UseRadioProps, VStack } from '@chakra-ui/react';

interface SubscribeRadioCardProps extends UseRadioProps {
  ariaHeadingLabel?: string;
}

const defaultProps: SubscribeRadioCardProps = {
  ariaHeadingLabel: '',
};

/**
 * The individual custom radio rendered for each group in the Subscription form
 * @param {string} ariaHeadingLabel - The label for the radios that need better detail for screen readers
 * @param ...props - Remaining props passed to the `useRadio` hook
 */
const SubscribeRadioCard: React.FC<SubscribeRadioCardProps> = ({ ariaHeadingLabel, ...props }) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

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
    <Box as="label" margin="0" textAlign="left" flex="1">
      {/*
        // ! Do not use the 'FormLabel' component as it will override state used to evaluate if an input was checked
      */}
      <input {...inputProps} aria-label={ariaHeadingLabel} />
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

SubscribeRadioCard.defaultProps = defaultProps;

export default SubscribeRadioCard;
