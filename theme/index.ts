import { extendTheme, ColorMode } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark" as ColorMode,
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html": {
      fontFamily: '"Lato", sans-serif',
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontSize: '1rem',
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    variants: {
      outline: {
        border: '1px solid',
        borderColor: 'rgba(255, 238, 238, 0.68)',
      },
      fluo: {
        bg: 'linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);',
        color: '#FFFEF2',
      },
      white: {
        bg: '#FFFEF2',
        color: 'rgba(151, 115, 255, 0.76)',
      },
      link: {
        fontWeight: 'light',
      },
    }
  }
};

const layerStyles = {
  appName: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
  },
};

const textStyles = {
  h2: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h3: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
  h4: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: "light",
    lineHeight: "110%",
    letterSpacing: "-1%",
  },
};

const colors = {
  sky: {
    600:'#11224D',
    800:'#0f214d',
  },
};

export default extendTheme({
  config,
  textStyles,
  layerStyles,
  colors,
  styles,
  components,
})
