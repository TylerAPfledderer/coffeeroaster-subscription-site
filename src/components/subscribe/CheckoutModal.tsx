import React, { useContext, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Show,
  SpaceProps,
  Text,
  useToast,
  VisuallyHidden,
} from '@chakra-ui/react';
import useChakraBreakpointComponent from '../../hooks/useChakraBreakpointComponent';
import OrderSummary from './OrderSummary';
import { FormValuesContext } from './SubscribeForm';
import { toKebabCase } from '../../utils/functions';

/**
 * Component to display a modal with the order summary and a button to confirm the order
 *
 * For the purposes of this project, the button on click will only reset the form values and state
 */
const CheckoutModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { formOptionDetails, currInputVals, resetInputVals } = useContext(FormValuesContext);

  const [deliveryPrice, setDeliveryPrice] = useState<string | undefined>('0');

  const confirmationToast = useToast();

  // Update visual rendering of the price
  // when the 'delivery-interval' value changes
  useEffect(() => {
    // Pull out the details from the Delivery Interval radio group inside the form data json
    const deliveryOptions = formOptionDetails.find(
      ({ radioGroupDetails }) => radioGroupDetails.groupName === 'delivery-interval'
    );

    // Pull out the price from the Delivery Interval radio group details
    const currDeliveryPrice = deliveryOptions?.radioGroupDetails.radioOptions.find(({ name }) => {
      return toKebabCase(name) === currInputVals['delivery-interval'];
    })?.price;

    setDeliveryPrice(currDeliveryPrice?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
  }, [currInputVals['delivery-interval']]);

  /**
   * Rendered wrapper component that hides its child elements when the screen is larger than the given breakpoint,
   * but is still visible to screen readers
   */
  const HiddenAboveMD = useChakraBreakpointComponent('md', VisuallyHidden, Box);

  /** Passed to the PaddingX prop in the `ModalHeader`, `ModalBody`, and `ModalFooter` components */
  const modalPaddingX: SpaceProps['paddingX'] = {
    base: '24px',
    md: '56px',
  };

  /**
   * Callback to "checkout" which actually closes the modal
   * and resets the radio groups to their default selections
   */
  const handleSubmitCheckout = () => {
    resetInputVals();
    onClose();
    confirmationToast({
      title: 'Order Confirmed!',
      description: 'Your order has been placed and will be delivered shortly.',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay zIndex="modal" />
      <ModalContent borderRadius="8px" overflow="hidden" marginX="16px" marginY="0">
        <ModalHeader background="darkGray.500" color="white" paddingY="6" paddingX={modalPaddingX}>
          <Heading>Order Summary</Heading>
        </ModalHeader>
        <ModalBody paddingTop="40px" paddingX={modalPaddingX} paddingBottom={{ base: '32px', md: '54px' }}>
          <OrderSummary color="gray.500" />
          <Text marginTop="16px">
            Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription
            discount codes can also be redeemed at the checkout.
          </Text>
        </ModalBody>
        <ModalFooter paddingX={modalPaddingX} paddingTop="0" paddingBottom={{ base: '24px', md: '54px' }}>
          <Show above="md">
            <Heading as={Text} flex="1" fontSize="32px" aria-hidden>
              <span>{deliveryPrice}</span> / mo
            </Heading>
          </Show>
          <Button
            type="submit"
            colorScheme="brand"
            isFullWidth
            height="auto"
            paddingY="16px"
            flex="1"
            title={`Checkout with the total cost of ${deliveryPrice} per month`}
            onClick={handleSubmitCheckout}
          >
            Checkout
            <HiddenAboveMD>
              &nbsp;- <span>{deliveryPrice}</span> / mo
            </HiddenAboveMD>
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
