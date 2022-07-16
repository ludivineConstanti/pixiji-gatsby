import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { AnimatePresence } from "src/models/basics"
import { useAppSelector } from "src/store"
import SHeader from "./style"
import ProgressBar from "../ProgressBar"

interface QueryProps {
  allQuiz: {
    nodes: {
      title: string
      quizId: number
      slug: string
    }[]
  }
  allKanjisJson: {
    nodes: {
      quizId: number
    }[]
  }
}

const Header = () => {
  const { allQuiz, allKanjisJson } = useStaticQuery<QueryProps>(graphql`
    query {
      allQuiz {
        nodes {
          title
          quizId
          slug
        }
      }
      allKanjisJson {
        nodes {
          quizId
        }
      }
    }
  `)
  const quizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesData = useAppSelector(state => state.quiz.data)
  const currentQuizData = quizzesData.filter(data => data.quizId === quizId)
  const currentQuizFromQuery = allQuiz.nodes.filter(
    data => data.quizId === quizId
  )[0]
  const totalNumberOfKanjis = allKanjisJson.nodes.filter(
    data => data.quizId === quizId
  ).length

  return (
    <SHeader>
      {currentQuizData.length > 0 && (
        <>
          <h2>
            Quiz {quizId} - {currentQuizFromQuery.title} ({totalNumberOfKanjis}{" "}
            kanjis)
          </h2>
          <AnimatePresence exitBeforeEnter={true}>
            {!currentQuizData[0].finished && <ProgressBar />}
          </AnimatePresence>
        </>
      )}
    </SHeader>
  )
}

export default Header
