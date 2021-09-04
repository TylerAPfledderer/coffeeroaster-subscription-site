import {FlexProps} from '@chakra-ui/layout';
import {chakra, forwardRef} from '@chakra-ui/system';
import React from 'react';

const MainSection = forwardRef<FlexProps, 'section'>(({children, ...props}, ref) => (
  <chakra.section
    as="section"
    position="relative"
    marginTop="32"
    display="flex"
    alignItems="center"
    /**
     * The prop's default spacing value of 0.5rem not needed. Call a new value on the custom component if a value is to be set
     */
    spacing="0"
    flexDirection={{base: 'column'}}
    {...props}
    ref={ref}
  >
    {children}
  </chakra.section>
));

export default MainSection;
