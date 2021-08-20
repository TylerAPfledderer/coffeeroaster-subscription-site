import React from 'react';
import {render} from 'test-utils';

import Hero from '../Hero';

const mockData = {
  title: 'My Title',
  description: 'My Description',
  imageSet: {},
};

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = render(<Hero heroData={mockData} />);
    expect(tree).toMatchSnapshot();
  });
});
