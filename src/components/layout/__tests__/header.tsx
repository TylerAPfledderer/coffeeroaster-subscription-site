import React from 'react';
import {render} from 'test-utils';

import Header from '../Header';

describe('Header', () => {
  it('renders correctly', () => {
    const tree = render(<Header />);
    expect(tree).toMatchSnapshot();
  });
});
