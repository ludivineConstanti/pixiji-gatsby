import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import About from "src/components/b_Pages/About"
import Seo from "src/components/seo"

const AboutPage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <About />
    </Layout>
  )
}

export default AboutPage
