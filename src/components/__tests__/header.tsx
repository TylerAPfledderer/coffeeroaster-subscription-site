import React from 'react';
import {render} from 'test-utils';

import Header from '../Header';

const mockData = {
  title: 'My Title',
  description: 'My Description',
  imageSet: {},
};

describe('Header', () => {
  it('renders correctly', () => {
    const tree = render(<Header heroData={mockData} />);
    expect(tree).toMatchSnapshot();
  });
});
