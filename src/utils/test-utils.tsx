import React, { FC, ReactElement } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { render, RenderOptions, RenderResult } from '@testing-library/react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { queries } from '@testing-library/dom';

const AllTheProviders: FC = ({ children }) => <ChakraProvider>{children}</ChakraProvider>;

interface CustomRender {
  // eslint-disable-next-line no-unused-vars
  (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult<typeof queries, HTMLElement>;
}

const customRender: CustomRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react';
export { customRender as render };
