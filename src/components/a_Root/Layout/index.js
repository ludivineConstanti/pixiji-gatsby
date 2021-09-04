import React from "react"

import { GlobalStyle } from "src/styles/globalStyle"
import Menu from "src/components/b_Fixed/Menu"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Menu />
      {children}
    </>
  )
}

export default Layout
