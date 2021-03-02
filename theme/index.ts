import { extendTheme, ColorMode } from "@chakra-ui/react"
import { Heading } from '../components/ui'

const config = {
  initialColorMode: "dark" as ColorMode,
  useSystemColorMode: false,
};

const styles = {
  global: {
    "html, body": {
      fontFamily: '"Lato", sans-serif',
    },
    "a": {
      color: '#FFFEF2',
      fontWeight: 300,
    }
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

const layerStyles = {};

const textStyles = {
  h1: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
  },
  h2: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: "bold",
  },
  h3: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 600,
  },
  h4: {
    fontFamily: "'Montserrat Alternates', sans-serif",
    fontWeight: 300,
  },
  paragraph: {
    fontFamily: '"Lato", sans-serif',
    fontWeight: 400,
    fontSize: "1rem",
  },
  appName: {
    fontFamily: '"Montserrat", sans-serif',
    fontWeight: 400,
    textTransform: 'uppercase',
    letterSpacing: "3px",
    lineHeight: 1,
  }
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
