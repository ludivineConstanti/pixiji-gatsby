import React from "react"
import { AnimatePresence } from "framer-motion"

import { useAppSelector } from "src/store"
import SHeader from "./SHeader"
import ProgressBar from "../ProgressBar"

const Header = () => {
  const quizId = useAppSelector(state => state.quiz.currentQuizId)
  const title = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].title
  )
  const totalOptions = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].totalOptions
  )
  const finishedQuiz = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].finished
  )

  return (
    <SHeader>
      <h2>
        Quiz {quizId} - {title} ({totalOptions} kanjis)
      </h2>
      <AnimatePresence exitBeforeEnter>
        {!finishedQuiz && <ProgressBar />}
      </AnimatePresence>
    </SHeader>
  )
}

export default Header
