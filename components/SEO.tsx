import React from 'react'
import Head from 'next/head'

export default function SEO({ data }) {
  return (
    <Head>
      <meta name="language" content="en" />

      <title>{data.title}</title>
      <meta name="title" content={data.title} />
      <meta content={data.description} name="description" />
      <meta content={data.keywords} name="keywords" />

      <meta itemProp="name" content={data.title} />
      <meta itemProp="description" content={data.description} />
      <meta
        itemProp="image"
        content="https://mooni.tech/images/seo/meta_card.jpg"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mooni.tech/" />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta
        property="og:image"
        content="https://mooni.tech/images/seo/meta_card.jpg"
      />
      <meta property="og:image:alt" content="Mooni dApp" />
      <meta property="og:site_name" content="Mooni" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://mooni.tech/" />
      <meta property="twitter:title" content={data.title} />
      <meta property="twitter:description" content={data.description} />
      <meta
        property="twitter:image"
        content="https://mooni.tech/images/seo/twitter_card.jpg"
      />
      <meta property="twitter:image:alt" content="Mooni" />

      <meta name="robots" content="index,follow" />
    </Head>
  )
}
