import React from "react"

import { useAppDispatch, useAppSelector } from "src/store"
import { nextQuestionQuiz } from "src/reducer/slices/quizSlice"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import Question from "../Question"

const StatePlaying = () => {
  const dispatch = useAppDispatch()

  const answeredQuestion = useAppSelector(
    state => !!state.quiz[`quiz${state.quiz.currentQuizId}`].answeredQuestion
  )
  const answeredCorrectly = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].answeredCorrectly
  )
  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)

  return (
    <>
      <Question quizId={currentQuizId} />
      {answeredQuestion && (
        <ButtonBig
          comment={answeredCorrectly ? "correct!" : "wrong!"}
          text="next"
          onClick={() => {
            dispatch(nextQuestionQuiz({ quizId: currentQuizId }))
          }}
        />
      )}
    </>
  )
}

export default StatePlaying
