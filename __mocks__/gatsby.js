const React = require('react');
const gatsby = jest.requireActual('gatsby');
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: 'Gatsby Starter Blog',
        description: 'A starter blog demonstrating what Gatsby can do.',
        author: 'kylemathews',
      },
    },
  })),
};
