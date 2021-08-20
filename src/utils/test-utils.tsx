import React, {FC, ReactElement} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {render, RenderOptions} from '@testing-library/react';

const AllTheProviders: FC = ({children}) => (
  <ChakraProvider>{children}</ChakraProvider>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};
