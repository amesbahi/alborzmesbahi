import React from 'react'
// import { Link } from 'gatsby'

import Layout from '../components/layout'
import Portfolio from '../components/portfolio'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <p>
      I am a self-taught software engineer. Currently, I am focusing on JavaScript, React, and Node.js.
    </p>
    <p>Here are some things I made.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Portfolio />
    </div>
  </Layout>
)

export default IndexPage
