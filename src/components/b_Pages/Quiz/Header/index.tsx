import React from "react"
import { AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector } from "src/store"
import SHeader from "./style"
import ProgressBar from "../ProgressBar"
import { QuizIdOptions } from "src/models/models"

interface QueryProps {
  allQuiz: {
    nodes: {
      title: string
      quizId: QuizIdOptions
      slug: string
    }[]
  }
}

const Header = () => {
  const { allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allQuiz {
        nodes {
          title
          quizId
          slug
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

  return (
    <SHeader>
      {currentQuizData.length && (
        <>
          <h2>
            Quiz {quizId} - {currentQuizFromQuery.title} (
            {currentQuizData[0].totalOptions} kanjis)
          </h2>
          <AnimatePresence exitBeforeEnter>
            {!currentQuizData[0].finishedQuiz && <ProgressBar />}
          </AnimatePresence>
        </>
      )}
    </SHeader>
  )
}

export default Header
