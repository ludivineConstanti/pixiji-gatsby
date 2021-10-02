import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import Error404 from "src/components/b_Pages/Error404"
import Seo from "src/components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="404" />
    <Error404 />
  </Layout>
)

export default IndexPage
