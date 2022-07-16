import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

import { GlobalStyle } from "src/styles/globalStyle"
import Menu from "src/components/b_Fixed/Menu"
import KanjiDetails from "src/components/b_Fixed/KanjiDetails"
import { useAppDispatch, useAppSelector } from "src/store"
import { updateIdSelectedKanji } from "src/reducer/slices/globalSlice"
import {
  updateWrongAnswers,
  resetStateQuiz,
} from "src/reducer/slices/quizSlice"
import { getWorstScores } from "src/helpers/backEnd/scores"
import { KanjisJsonFragmentToInitializeQuiz } from "src/models/models"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentToInitializeQuiz
}

interface LayoutProps {
  children: JSX.Element | JSX.Element[]
  isPlaying?: boolean
}

const Layout = ({ children, isPlaying = false }: LayoutProps) => {
  const { allKanjisJson } = useStaticQuery<QueryProps>(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragmentToInitializeQuiz
      }
    }
  `)

  const [hasMounted, setHasMounted] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    setHasMounted(true)
    return () => {
      dispatch(updateIdSelectedKanji(false))
    }
  }, [])

  const email = useAppSelector(state => state.global.email)

  useEffect(() => {
    if (hasMounted) {
      if (email) {
        getWorstScores({ email }).then(response => {
          if (
            typeof response === "object" &&
            response.data &&
            response.data.data &&
            response.data.data.getWorstScores
          ) {
            dispatch(
              updateWrongAnswers({
                answers: response.data.data.getWorstScores.scores,
                kanjis: allKanjisJson.nodes,
              })
            )
          }
        })
      } else {
        dispatch(resetStateQuiz())
      }
    }
  }, [email])

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
