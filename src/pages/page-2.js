import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import SignIn from "../components/users/signIn"
import SignOut from "../components/users/signOut"
import SignUp from "../components/users/signUp"

const SecondPage = () => (
  <Layout>
    <h1>Authentication</h1>
    <SignIn />
    <SignOut />
    <SignUp />
    <Link to="/">Back to CRUD</Link>
  </Layout>
)

export default SecondPage
