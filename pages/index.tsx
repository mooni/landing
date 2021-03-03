import Layout from '../components/Layout'
import Hero from '../components/Home/Hero'
import Features from '../components/Home/Features'
import FAQ from '../components/Home/FAQ'
import Grant from '../components/Home/Grant'

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
