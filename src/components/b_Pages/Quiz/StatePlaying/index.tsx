import React from "react"

import { useAppDispatch, useAppSelector } from "src/store"
import { nextQuestionQuiz } from "src/reducer/slices/quizSlice"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import Question from "../Question"

const StatePlaying = () => {
  const dispatch = useAppDispatch()

  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesData = useAppSelector(state => state.quiz.data)
  const currentQuizData = quizzesData.filter(
    data => data.quizId === currentQuizId
  )

  return (
    <>
      <Question quizId={currentQuizId} />
      {currentQuizData.length && currentQuizData[0].answeredQuestion && (
        <ButtonBig
          comment={currentQuizData[0].answeredCorrectly ? "correct!" : "wrong!"}
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
