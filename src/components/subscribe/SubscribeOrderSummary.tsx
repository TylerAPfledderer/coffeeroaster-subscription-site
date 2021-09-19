import React, { useContext } from 'react';
import { chakra, forwardRef, Box, BoxProps, Heading, Text } from '@chakra-ui/react';
import { FormValuesContext } from './SubscribeForm';

const OrderHighlight: React.FC = ({ children }) => <chakra.span color="brand.500">{children}</chakra.span>;

const SubscribeOrderSummary = forwardRef<BoxProps, 'div'>((props, ref) => {
  const { currInputVals } = useContext(FormValuesContext);

  /**
   * Function to convert a string in kebab case to a sentence case string
   * @param {string} str - string to convert
   * @return string = the string with the first letter capitalized and spaces
   */
  const kebabToNormalString = (str: string) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized.replace(/-/g, ' ');
  };

  // The values displayed in the order summary
  const drinkingStyle = kebabToNormalString(currInputVals['drinking-style']);
  const coffeeType = kebabToNormalString(currInputVals['coffee-type']);
  const coffeeSize = kebabToNormalString(currInputVals['coffee-size']);
  const beanStyle = kebabToNormalString(currInputVals['bean-style']);
  const deliveryInterval = kebabToNormalString(currInputVals['delivery-interval']);

  return (
    <Box
      background="darkGray.500"
      color="white"
      textAlign="left"
      paddingTop="32px"
      paddingBottom={{ base: '42px' }}
      paddingX={{ base: '24px', md: '44px' }}
      borderRadius="10px"
      {...props}
      ref={ref}
    >
      <Heading as="h2" color="gray.500" fontFamily="body" size="sm" textTransform="uppercase" mb="16px">
        Order Summary
      </Heading>
      <Heading as={Text} size="xl" maxWidth="none">
        {'\u201CI drink my coffee as '}
        <OrderHighlight>{drinkingStyle}</OrderHighlight>
        {', with a '}
        <OrderHighlight>{coffeeType}</OrderHighlight>
        {' type of bean. '}
        <OrderHighlight>{coffeeSize}</OrderHighlight>
        {' ground ala '}
        <OrderHighlight>{beanStyle}</OrderHighlight>
        {', sent to me '}
        <OrderHighlight>{deliveryInterval}</OrderHighlight>
        {'.\u201D'}
      </Heading>
    </Box>
  );
});

export default SubscribeOrderSummary;
