import React from 'react'
import Head from 'next/head'

export default function SEO({ data }) {
  return (
    <Head>
      <title>{data.title}</title>

      <meta content={data.description} name="description" />
      <meta content={data.keywords} name="keywords" />

      <meta name="language" content="EN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@moonidapp" />
      <meta name="twitter:title" content="🌚 Mooni" />
      <meta name="twitter:description" content="Easy crypto cash out" />
      <meta
        name="twitter:image"
        content="https://mooni.tech/images/app_screenshot.jpg"
      />
      <meta name="twitter:image:alt" content="Mooni" />

      <meta property="og:title" content="🌚 Mooni" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mooni.tech/" />
      <meta
        property="og:image"
        content="https://mooni.tech/images/app_screenshot.jpg"
      />
      <meta
        property="og:description"
        content="Easy crypto cash out. Effortlessly convert cryptocurrencies from your blockchain wallet, into fiat to your bank account, within minutes."
      />
      <meta property="og:site_name" content="Mooni" />
      <meta
        property="og:video:secure_url"
        content="https://www.youtube.com/watch?v=99E2U4Qgsrc"
      />
      <meta property="og:image:alt" content="Mooni dApp" />

      <meta name="robots" content="index,follow" />
    </Head>
  )
}
