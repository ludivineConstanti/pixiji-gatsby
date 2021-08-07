import * as React from "react"

import Layout from "../components/a_Root/Layout"
import Home from "src/components/b_Pages/Home"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Home />
  </Layout>
)

export default IndexPage
