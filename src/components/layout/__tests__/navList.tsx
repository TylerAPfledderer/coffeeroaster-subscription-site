import React from 'react';
import { render } from 'test-utils';
import NavList from '../NavList';

test('renders correctly', () => {
  const tree = render(<NavList />);
  expect(tree).toMatchSnapshot();
});
