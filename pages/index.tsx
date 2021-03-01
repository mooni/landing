import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import Link from 'next/link'

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <section>
        <h2>Blog</h2>
      </section>
    </Layout>
  )
}
