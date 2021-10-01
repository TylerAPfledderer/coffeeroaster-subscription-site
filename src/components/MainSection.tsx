import React from 'react';
import { chakra, forwardRef, FlexProps } from '@chakra-ui/react';

/**
 * Wrapper component for the high-level section elements on each page.
 *
 * It provides consistency for the layout and spacing of each instance.
 *
 * It is a chakra factory component to be able to use the chakra props.
 *
 * Forwards chakra props from the parent for any specific cases with layout or color.
 */
const MainSection = forwardRef<FlexProps, 'section'>(({ children, ...props }, ref) => (
  <chakra.section
    position="relative"
    marginTop="32"
    display="flex"
    alignItems="center"
    flexDirection={{ base: 'column' }}
    {...props}
    ref={ref}
  >
    {children}
  </chakra.section>
));

export default MainSection;
