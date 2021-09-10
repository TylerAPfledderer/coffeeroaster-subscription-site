import {AccordionItem, AccordionButton, AccordionIcon, AccordionPanel} from '@chakra-ui/accordion';
import {FormControl} from '@chakra-ui/form-control';
import {Box} from '@chakra-ui/layout';
import React from 'react';
import SubscribeRadioGroup, {SubscribeRadioGroupProps} from './SubscribeRadioGroup';

interface SubscribeFormItemProps {
  heading: string;
  radioGroup: SubscribeRadioGroupProps;
}

const SubscribFormItem: React.FC<SubscribeFormItemProps> = ({heading, radioGroup}) => (
  <AccordionItem border="none">
    <h3>
      <AccordionButton padding="0" justifyContent="space-between" color="gray.500">
        <Box textAlign="left" flexBasis="70%">
          {heading}
        </Box>
        <AccordionIcon color="brand.500" />
      </AccordionButton>
    </h3>
    <AccordionPanel padding="0" marginTop="24px">
      <FormControl as="fieldset">
        <SubscribeRadioGroup {...radioGroup} />
      </FormControl>
    </AccordionPanel>
  </AccordionItem>
);

export default SubscribFormItem;
