import React, { useEffect } from "react"
import { AnimatePresence } from "framer-motion"

import { useAppDispatch, useAppSelector } from "src/store"
import { updateIdQuiz, initializeQuiz } from "src/reducer/slices/quizSlice"
import IlluQuiz from "src/components/d_Illustrations/IlluQuiz"
import SQuiz from "./style"
import Header from "./Header"
import StatePlaying from "./StatePlaying"
import StateFinished from "./StateFinished"
import Warning from "./Warning"

interface QuizProps {
  currentQuiz: {
    id: 1 | 2 | 3
    title: string
    slug: string
  }
}

const Quiz = ({ currentQuiz }: QuizProps) => {
  const dispatch = useAppDispatch()

  const finishedQuiz = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].finished
  )
  const kanjisArr = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].rightAnswers
  )
  const isLoggedIn = useAppSelector(state => !!state.global.email)

  useEffect(() => {
    dispatch(updateIdQuiz({ quizId: currentQuiz.id, slug: currentQuiz.slug }))
    dispatch(
      initializeQuiz({ quizId: currentQuiz.id, title: currentQuiz.title })
    )
  }, [currentQuiz.id, currentQuiz.slug, currentQuiz.title])

  return (
    <>
      <IlluQuiz currentQuizId={currentQuiz.id} kanjisArr={kanjisArr} />
      <SQuiz>
        <Header />
        {!isLoggedIn && <Warning />}
        <AnimatePresence exitBeforeEnter>
          {finishedQuiz ? <StateFinished /> : <StatePlaying />}
        </AnimatePresence>
      </SQuiz>
    </>
  )
}

export default Quiz
