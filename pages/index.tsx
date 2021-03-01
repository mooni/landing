import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Header />
      <main>
        <Hero />
        <Features />
        <Features reverse/>
        <Features />
      </main>
    </Layout>
  )
}
