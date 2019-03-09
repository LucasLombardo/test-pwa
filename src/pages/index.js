import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import CreateBook from "../components/books/createBook"
import ReadBook from "../components/books/readBook"
import ReadBooks from "../components/books/readBooks"
import UpdateBook from "../components/books/updateBook"
import DestroyBook from "../components/books/destroyBook"

const IndexPage = () => (
  <Layout>
    <h1>Oh Crud</h1>
    <CreateBook />
    <ReadBook />
    <ReadBooks />
    <UpdateBook />
    <DestroyBook />
    <Link to="/page-2/">Go to Authentication</Link>
  </Layout>
)

export default IndexPage
