import React from 'react';
import { render } from 'test-utils';
import Footer from '../Footer';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = render(<Footer />);
    expect(tree).toMatchSnapshot();
  });
});
