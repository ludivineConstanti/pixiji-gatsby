import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

import { GlobalStyle } from "src/styles/globalStyle"
import Menu from "src/components/b_Fixed/Menu"
import KanjiDetails from "src/components/b_Fixed/KanjiDetails"
import { useAppDispatch } from "src/store"
import { updateIdSelectedKanji } from "src/reducer/slices/globalSlice"

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  isPlaying?: boolean
}

const Layout = ({ children, isPlaying = false }: LayoutProps) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    return () => {
      dispatch(updateIdSelectedKanji(false))
    }
  }, [])

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Menu isPlaying={isPlaying} />
      <KanjiDetails />
      {children}
    </>
  )
}

export default Layout
