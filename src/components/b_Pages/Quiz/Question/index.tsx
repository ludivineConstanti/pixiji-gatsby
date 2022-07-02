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

  const quizzesData = useAppSelector(state => state.quiz.data)
  const currentQuizData = quizzesData.filter(data => data.quizId === quizId)

  if (!currentQuizData.length) return null

  const { infosAnswer, arrAnswers } = currentQuizData[0].formattedQuiz[0]

  const currentEnglishWord = allKanjisJson.nodes.filter(
    (e: { kanjiId: number }) => {
      return e.kanjiId === arrAnswers[infosAnswer.answerIndex]
    }
  )[0].en[0]

  return (
    <SQuestion>
      <SText>Which character means {currentEnglishWord}?</SText>
      <SOptions>
        {
          // eslint-disable-next-line max-len
          arrAnswers.map((e: number) => (
            <ButtonKanji
              quizId={quizId}
              key={`button-kanji-${e}`}
              kanjiId={e}
              disabled={currentQuizData[0].answeredQuestion}
            />
          ))
        }
      </SOptions>
    </SQuestion>
  )
}

export default memo(Question)
