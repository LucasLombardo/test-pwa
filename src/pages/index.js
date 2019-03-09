import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CatsOne from "../components/catsone"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Test web app</h1>
    <CatsOne />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
