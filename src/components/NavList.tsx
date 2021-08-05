import React, { ComponentPropsWithRef } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Container, Link, List, ListItem, Stack } from "@chakra-ui/react"

interface NavLinkProps {
  name: string
  path: string
}

const NavListLink: React.FC<NavLinkProps> = ({ name, path }) => {
  return (
    <ListItem>
      <Link
        as={GatsbyLink}
        to={path}
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="44px"
      >
        {name}
      </Link>
    </ListItem>
  )
}

/**
 *
 * The NavList is primitive in styling as it is used in multiple locations.
 * These locations layout out and color the links differently.
 * Therefore, Chakra props are allowed to be passed into this component
 *  instead of applying them directly to the internal Chakra components.
 * Props passed here should be ones that provide inheritance
 *  down to the links themselves, so no further complication necessary.
 */

const NavList = (props: ComponentPropsWithRef<typeof Container>) => {
  return (
    <Stack as={List} {...props}>
      <NavListLink name="Home" path="/" />
      <NavListLink name="About Us" path="/about" />
      <NavListLink name="Create Your Plan" path="/subscribe" />
    </Stack>
  )
}

export default NavList
