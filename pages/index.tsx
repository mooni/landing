import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'
import FAQ from '../components/FAQ'
import Grant from '../components/Grant'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <FAQ />
      <Grant />
    </Layout>
  )
}
