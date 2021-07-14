import React from "react"
import Header from "../components/Header"

interface RouteLocation {
  location: {
    pathname: String
  }
}

const IndexPage = ({ location }: RouteLocation) => {
  return <Header pagePath={location.pathname} />
}

export default IndexPage
