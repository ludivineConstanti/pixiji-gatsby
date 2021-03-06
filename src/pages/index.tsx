import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import Home from "src/components/b_Pages/Home"
import Seo from "src/components/seo"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <Home />
    </Layout>
  )
}

export default IndexPage
