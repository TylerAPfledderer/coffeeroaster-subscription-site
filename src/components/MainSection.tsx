import React from 'react';
import { chakra, forwardRef, FlexProps } from '@chakra-ui/react';

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
