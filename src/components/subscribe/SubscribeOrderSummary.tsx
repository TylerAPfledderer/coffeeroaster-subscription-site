import React from 'react';
import { chakra, forwardRef, Box, BoxProps, Heading, Text } from '@chakra-ui/react';

const OrderHighlight: React.FC = ({ children }) => <chakra.span color="brand.500">{children}</chakra.span>;

const SubscribeOrderSummary = forwardRef<BoxProps, 'div'>((props, ref) => {
  const drinkingStyle = 'Filter';
  const coffeeType = 'Decaf';
  const coffeeSize = '250g';
  const beanStyle = 'Cafetiare';
  const deliveryInterval = 'Every week';
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
