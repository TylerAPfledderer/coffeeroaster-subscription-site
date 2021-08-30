import React from 'react';
import {render, screen} from 'test-utils';
import userEvent from '@testing-library/user-event';

import Layout from '../layout';

/**
 * Mock data for pages where the hero section does receive
 * a path check, and therefore renders a button
 */
const mockDataWithPath = {
  pagePath: '/',
  title: 'My Title',
  description: 'My Description',
  imageSet: {},
};

// eslint-disable-next-line prettier/prettier
const renderLayout = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  render(<Layout heroData={mockDataWithPath} />);

const {rerender, container} = renderLayout();

test('renders correctly', () => {
  expect(container).toMatchSnapshot();
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

const button = () => screen.queryByTestId('hero-button');

test('Button link for Index Hero', () => {
  renderLayout();

  // Make sure it exists on the index page
  expect(button()).toBeTruthy();

  // Make sure it holds the correct path to the subscription page
  expect(button()?.getAttribute('href')).toBe('/subscribe');
});

/**
 * Mock data for pages where the hero section does not receive
 * a path check, and therefore not render a button
 */
const mockDataNoPath = {
  title: 'My Title',
  description: 'My Description',
  imageSet: {},
};

test('no error and button does not exist on hero', () => {
  // Rerender to pass in data without the page path value
  rerender(<Layout heroData={mockDataNoPath} />);

  // Make sure it exists on the index page
  expect(button()).toBeFalsy();
});
