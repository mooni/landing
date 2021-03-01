import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const layerStyles = {
  appName: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
  }
};

const colors = {};

export default extendTheme({
  config,
  layerStyles,
  colors,
})
