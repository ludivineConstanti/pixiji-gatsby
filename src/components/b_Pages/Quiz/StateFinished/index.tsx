import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import { cheatingButtonFinishQuiz } from "src/reducer/slices/quizSlice"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import TextWithTitle from "src/components/c_Partials/TextWithTitle"
import { QuizIdOptions } from "src/models/models"

interface QueryProps {
  allQuiz: {
    nodes: {
      quizId: QuizIdOptions
      slug: string
    }[]
  }
}

interface StateFinishedProps {
  kanjis: number[]
}

const StateFinished = ({ kanjis }: StateFinishedProps) => {
  const { allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allQuiz {
        nodes {
          quizId
          slug
        }
      }
    }
  `)

  const dispatch = useAppDispatch()

  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)

  const nextQuiz = allQuiz.nodes.filter(
    data => data.quizId === currentQuizId + 1
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
          console.log("clicked replay")
          dispatch(
            cheatingButtonFinishQuiz({
              kanjis,
            })
          )
        }}
      />
      {nextQuiz.length ? (
        <ButtonBig
          text={`Quiz ${nextQuiz[0].quizId}`}
          side="right"
          path={`/quiz/${nextQuiz[0].slug}`}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default StateFinished
