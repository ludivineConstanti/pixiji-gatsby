import * as React from "react"

import Layout from "src/components/a_Root/Layout"
import MyProfile from "src/components/b_Pages/MyProfile"
import Seo from "src/components/seo"

const MyProfilePage = props => {
  return (
    <Layout>
      <Seo title="My account" />
      <MyProfile />
    </Layout>
  )
}

export default MyProfilePage
