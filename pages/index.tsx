import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import FAQ from '../components/Home/FAQ'
import Grant from '../components/Home/Grant'

const seoData = {
  title: 'Mooni - Easiest crypto cash out',
  description: 'Effortlessly convert cryptocurrencies from your blockchain wallet, into fiat to your bank account, within minutes.',
  keywords:
    'mooni,offramp,crypto off-ramp,fiat,cash out,defi,exchange,ethereum,crypto,cryptocurrency,cryptocurrencies,blockchain,DAI,ETH',
}

export default function Home() {
  return (
    <Layout>
      <SEO data={seoData} />
      <Hero />
      <Features />
      <FAQ />
      <Grant />
    </Layout>
  )
}
