import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import Login from "src/components/b_Pages/Login"
import Seo from "src/components/seo"

const LoginPage = () => {
  return (
    <Layout>
      <Seo title="Log in" />
      <Login />
    </Layout>
  )
}

export default LoginPage
