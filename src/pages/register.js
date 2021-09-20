import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import Register from "src/components/b_Pages/Register"
import Seo from "src/components/seo"

const CreateMyAccountPage = props => {
  return (
    <Layout>
      <Seo title="Register" />
      <Register />
    </Layout>
  )
}

export default CreateMyAccountPage
