import React from 'react';
import {render, screen} from 'test-utils';

import Logo from '../Logo';

test('renders correctly', () => {
  const tree = render(<Logo />);
  expect(tree).toMatchSnapshot();
});

test('should render white text on dark background', () => {
  render(<Logo hasDarkBg />);
  expect(screen.getByTestId('logo-text')).toHaveAttribute('fill', '#fff');
});
