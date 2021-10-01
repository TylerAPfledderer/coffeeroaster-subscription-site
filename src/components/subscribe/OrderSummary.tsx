import React, { useContext } from 'react';
import { chakra, forwardRef, Heading, HeadingProps, Text } from '@chakra-ui/react';
import { FormValuesContext } from './SubscribeForm';
import { kebabToNormalString } from '../../utils/functions';

/**
 * Reusable Support wrapper for providing a highlighting style to the dynamic content rendered in the `SubscribeOrderSummary` component
 */
const OrderHighlight: React.FC = ({ children }) => <chakra.span color="brand.500">{children}</chakra.span>;
/**
 * Component that renders the details of the subscription order.
 * - Pulls in context from the values updated in the form.
 * - Has Chakra props forwarded to change styling between the page and modal instances.
 */
const SubscribeOrderSummary = forwardRef<HeadingProps, 'p'>((props, ref) => {
  const { currInputVals } = useContext(FormValuesContext);

  // The values displayed in the order summary
  const drinkingStyle = kebabToNormalString(currInputVals['drinking-style']);
  const coffeeType = kebabToNormalString(currInputVals['coffee-type']);
  const coffeeSize = kebabToNormalString(currInputVals['coffee-size']);
  const beanStyle = kebabToNormalString(currInputVals['bean-style']);
  const deliveryInterval = kebabToNormalString(currInputVals['delivery-interval']);

  return (
    <Heading as={Text} size="xl" maxWidth="none" {...props} ref={ref}>
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
  );
});

export default SubscribeOrderSummary;
