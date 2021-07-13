import React, { ComponentProps } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Container, Link, List, ListItem, Stack } from "@chakra-ui/react"

interface NavLinkProps {
  name: string
  path: string
}

const NavListLink = ({ name, path }: NavLinkProps) => {
  return (
    <ListItem>
      <Link as={GatsbyLink} to={path}>
        {name}
      </Link>
    </ListItem>
  )
}

const NavList = (props: ComponentProps<typeof Container>) => {
  return (
    <Stack as={List} {...props}>
      <NavListLink name="Home" path="/#" />
      <NavListLink name="About Us" path="/#" />
      <NavListLink name="Create Your Plan" path="/#" />
    </Stack>
  )
}

export default NavList
