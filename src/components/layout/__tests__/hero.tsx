import React from 'react';
import { render } from 'test-utils';
import Hero from '../Hero';

describe('Hero', () => {
  const tree = render(<Hero />);
  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
