import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html, body": {
      bg: 'radial-gradient(82.17% 210.37% at 0.59% 2.48%, #292c35 0%, #11224D 97.19%)',
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
  bgGradient: {
    bg: 'linear-gradient(110.78deg, rgba(255, 238, 238, 0.68) -3.19%, rgba(255, 115, 117, 0.82) 1.75%, rgba(227, 115, 255, 0.68) 49.98%, rgba(151, 115, 255, 0.76) 68.97%);',
  }
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
    800:'#292c35',
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
