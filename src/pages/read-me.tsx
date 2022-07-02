import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import ReadMe from "src/components/b_Pages/ReadMe"
import Seo from "src/components/seo"

const ReadMePage = () => {
  return (
    <Layout>
      <Seo title="Read me" />
      <ReadMe />
    </Layout>
  )
}

export default ReadMePage
