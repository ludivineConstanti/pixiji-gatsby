import React, { memo } from "react"

import { useAppSelector } from "src/store"
import ButtonKanji from "../ButtonKanji"
import SQuestion, { SText, SOptions } from "./style"

interface QuestionProps {
  quizId: number
}

const Question = ({ quizId }: QuestionProps) => {
  const dataObj = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].dataQuiz[0]
  )
  const answeredQuestion = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].answeredQuestion
  )

  if (!dataObj) return null
  const { infosAnswer, arrAnswers } = dataObj
  return (
    <SQuestion>
      <SText>
        Which character means {arrAnswers[infosAnswer.answerIndex].en[0]}?
      </SText>
      <SOptions>
        {
          // eslint-disable-next-line max-len
          arrAnswers.map(e => (
            <ButtonKanji
              quizId={quizId}
              key={e.kanjiId}
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
