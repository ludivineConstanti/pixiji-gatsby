import React from "react"

import { ResetStyle } from "src/styles/resetStyle"
import Menu from "src/components/b_Fixed/Menu"

const Layout = ({ children }) => {
  return (
    <>
      <ResetStyle />

      <Menu />

      {children}
    </>
  )
}

export default Layout
