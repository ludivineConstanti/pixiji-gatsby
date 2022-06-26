import React, { memo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppSelector } from "src/store"
import ButtonKanji from "../ButtonKanji"
import SQuestion, { SText, SOptions } from "./style"

interface QuestionProps {
  quizId: number
}

const Question = ({ quizId }: QuestionProps) => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        nodes {
          kanjiId
          en
        }
      }
    }
  `)

  const dataObj = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].dataQuiz[0]
  )
  const answeredQuestion = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].answeredQuestion
  )

  if (!dataObj) return null

  const { infosAnswer, arrAnswers } = dataObj

  // console.log(infosAnswer.answerIndex, arrAnswers[infosAnswer.answerIndex])

  const currentEnglishWord = allKanjisJson.nodes.filter(
    (e: { kanjiId: number }) => {
      // console.log(e, e.kanjiId, arrAnswers[infosAnswer.answerIndex])
      // console.log(e.kanjiId === arrAnswers[infosAnswer.answerIndex])
      return e.kanjiId === arrAnswers[infosAnswer.answerIndex]
    }
  )[0].en[0]

  // console.log("currentEnglishWord", currentEnglishWord)

  return (
    <SQuestion>
      <SText>Which character means {currentEnglishWord}?</SText>
      <SOptions>
        {
          // eslint-disable-next-line max-len
          arrAnswers.map(e => (
            <ButtonKanji
              quizId={quizId}
              key={e}
              kanjiId={e}
              possibleAnswer={e}
              disabled={answeredQuestion}
            />
          ))
        }
      </SOptions>
    </SQuestion>
  )
}

export default memo(Question)
