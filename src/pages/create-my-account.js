import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import CreateMyAccount from "src/components/b_Pages/CreateMyAccount"
import Seo from "src/components/seo"

const CreateMyAccountPage = props => {
  console.log(props)
  return (
    <Layout>
      <Seo title="Create my account" />
      <CreateMyAccount />
    </Layout>
  )
}

export default CreateMyAccountPage
