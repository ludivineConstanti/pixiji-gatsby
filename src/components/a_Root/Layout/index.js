import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

import { GlobalStyle } from "src/styles/globalStyle"
import Menu from "src/components/b_Fixed/Menu"

const Layout = ({ children, isPlaying }) => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Menu isPlaying={isPlaying} />
      {children}
    </>
  )
}

Layout.propTypes = {
  isPlaying: PropTypes.bool,
}

Layout.defaultProps = {
  isPlaying: false,
}

export default Layout
