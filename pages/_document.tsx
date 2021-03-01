import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import theme from "../theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>

          <link rel="icon" type="image/png" sizes="192x192"  href="favicons/android-icon-192x192.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="96x96" href="favicons/favicon-96x96.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png"/>

          <link rel="preconnect" href="https://fonts.gstatic.com"/>
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@100;300;400;700&display=swap" rel="stylesheet"/>

        </Head>
        <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}