import React from 'react';
import { render } from 'test-utils';
import NavBar from '../NavBar';

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = render(<NavBar />);
    expect(tree).toMatchSnapshot();
  });
});
