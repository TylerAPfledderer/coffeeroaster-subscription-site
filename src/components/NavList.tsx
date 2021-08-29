import React from 'react';
import {Link as GatsbyLink} from 'gatsby';
import {forwardRef, Link, List, ListItem, Stack, StackProps} from '@chakra-ui/react';

interface NavLinkProps {
  name: string;
  path: string;
}

const NavListLink: React.FC<NavLinkProps> = ({name, path}) => (
  <ListItem>
    <Link as={GatsbyLink} to={path} display="flex" justifyContent="center" alignItems="center" height="44px">
      {name}
    </Link>
  </ListItem>
);

/**
 *
 * The NavList is primitive in styling as it is used in multiple locations.
 * - These locations give different layout and color the links differently.
 * - Chakra props are allowed to be passed into this component
 *  instead of applying them directly to the internal Chakra components.
 * - Props passed here should be ones that provide inheritance
 *  down to the links themselves, so no further complication necessary.
 * - Use forwardRef to get the ref to the internal Chakra components. Pass the props equal to the parent component.
 */

const NavList = forwardRef<StackProps, typeof List>((props, ref) => (
  <Stack as={List} {...props} ref={ref} aria-label="Main Navigation">
    <NavListLink name="Home" path="/" />
    <NavListLink name="About Us" path="/about" />
    <NavListLink name="Create Your Plan" path="/subscribe" />
  </Stack>
));

export default NavList;
