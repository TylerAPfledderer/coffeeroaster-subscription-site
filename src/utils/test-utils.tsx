import React, {FC, ReactElement} from 'react';
import {ChakraProvider} from '@chakra-ui/react';
import {render, RenderOptions, RenderResult} from '@testing-library/react';
import {queries} from '@testing-library/dom';

const AllTheProviders: FC = ({children}) => <ChakraProvider>{children}</ChakraProvider>;

interface CustomRender {
  (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult<typeof queries, HTMLElement>;
}

const customRender: CustomRender = (ui, options) => render(ui, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react';
export {customRender as render};
