import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Api from "../components/api2"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <Api />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
