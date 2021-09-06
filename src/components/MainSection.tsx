import {FlexProps} from '@chakra-ui/layout';
import {chakra, forwardRef} from '@chakra-ui/system';
import React from 'react';

const MainSection = forwardRef<FlexProps, 'section'>(({children, ...props}, ref) => (
  <chakra.section
    position="relative"
    marginTop="32"
    display="flex"
    alignItems="center"
    flexDirection={{base: 'column'}}
    {...props}
    ref={ref}
  >
    {children}
  </chakra.section>
));

export default MainSection;
