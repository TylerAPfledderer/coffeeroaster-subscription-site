import React from 'react';
import {render, screen} from 'test-utils';
import userEvent from '@testing-library/user-event';

import Layout from '../layout';

const mockData = {
  title: 'My Title',
  description: 'My Description',
  imageSet: {},
};

// eslint-disable-next-line prettier/prettier
const renderLayout = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  render(<Layout location="/section" heroData={mockData} />);

test('renders correctly', () => {
  expect(renderLayout()).toMatchSnapshot();
});

const navButton = () => screen.getByTestId('nav-button');

const isMenuClosed = () => {
  expect(navButton()).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByTestId('open-nav-icon')).toBeTruthy();
};

const isMenuOpen = () => {
  expect(navButton()).toHaveAttribute('aria-expanded', 'true');
  expect(screen.getByTestId('close-nav-icon')).toBeTruthy();
};

/**
 * Check Mobile Nav button on toggle
 */
test('Mobile nav toggling open and close with aria-expanded with change of icon', () => {
  renderLayout();

  /** Initial state on page load */
  isMenuClosed();

  /** First change of state on click to open */
  userEvent.click(navButton());
  isMenuOpen();

  /** Change back to closed */
  userEvent.click(navButton());
  isMenuClosed();
});
