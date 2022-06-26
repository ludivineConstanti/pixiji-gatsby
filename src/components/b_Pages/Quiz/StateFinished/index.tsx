import React, { useMemo } from "react"

import { useAppDispatch, useAppSelector } from "src/store"
import { cheatingButtonFinishQuiz } from "src/reducer/slices/quizSlice"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import TextWithTitle from "src/components/c_Partials/TextWithTitle"

interface QuizProps {
  kanjis: number[]
}

const Quiz = ({ kanjis }: QuizProps) => {
  const dispatch = useAppDispatch()

  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const dataQuizzes = useAppSelector(state => state.quiz.dataQuizzes)

  const nextQuiz = useMemo(
    () => dataQuizzes.filter(quiz => quiz.id === currentQuizId + 1),
    [dataQuizzes, currentQuizId]
  )
  return (
    <>
      <TextWithTitle
        title="Well done!"
        text={[
          "You answed all the questions!",
          "Try putting your mouse over the squares, on the right, to look at the answers again.",
        ]}
      />
      <ButtonBig
        text="Replay"
        onClick={() => {
          dispatch(
            cheatingButtonFinishQuiz({
              kanjis,
            })
          )
        }}
      />
      {nextQuiz.length ? (
        <ButtonBig
          text={`Quiz ${nextQuiz[0].id}`}
          side="right"
          path={`/quiz/${nextQuiz[0].slug}`}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default Quiz
