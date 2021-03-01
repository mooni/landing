import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Hero />
      <Features />
    </Layout>
  )
}
