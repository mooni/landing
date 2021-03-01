import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Mooni'

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The easiest way to cashout cryptocurrencies"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700"
          rel="stylesheet"/>

        <title>{siteTitle}</title>
      </Head>
      <main>{children}</main>
    </>
  )
}
