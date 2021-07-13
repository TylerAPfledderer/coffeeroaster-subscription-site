import { extendTheme } from "@chakra-ui/react"
const theme = {
  fonts: {
    heading:
      "Fraunces, 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', Georgia, serif",
    body: "Barlow, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  },
  layerStyles: {
    navOpened: {
      maxHeight: "full",
      opacity: "1",
    },
    navClosed: {
      maxHeight: "0",
      opacity: "0",
    },
  },
}
export default extendTheme(theme)
