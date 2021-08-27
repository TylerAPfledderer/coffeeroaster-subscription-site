import React from 'react';
import {render, screen} from 'test-utils';

import Hero from '../Hero';

const mockData = {
  title: 'My Title',
  description: 'My Description',
  imageSet: {},
};

const renderHero = (path?: string) => render(<Hero heroData={mockData} pagePath={path} />);

describe('Hero', () => {
  it('renders correctly', () => {
    expect(renderHero('/')).toMatchSnapshot();
  });
});

test('Button link for Index Hero', () => {
  renderHero('/');
  const button = screen.getByTestId('hero-button');

  // Make sure it exists on the index page
  expect(button).toBeTruthy();

  // Make sure it holds the correct path to the subscription page
  expect(button.getAttribute('href')).toBe('/subscribe');
});
