import React, { useMemo } from "react"

import SProgressBar from "./style"
import ProgressSquare from "../ProgressSquare"
import { useAppSelector } from "src/store"

const vProgressBar = {
  initial: { marginTop: 0 },
  animate: { marginTop: "16px" },
}

const ProgressBar = () => {
  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesData = useAppSelector(state => state.quiz.data)
  const currentQuizData = quizzesData.filter(
    data => data.quizId === currentQuizId
  )

  const squaresArr = useMemo(() => {
    const arrTemp = []

    const questionNumber = currentQuizData.length
      ? currentQuizData[0].totalQuestions
      : 0
    const currentNumber = quizzesData.length
      ? quizzesData[0].totalQuestions - quizzesData[0].formattedQuiz.length
      : 0

    for (let i = 0; i < questionNumber; i += 1) {
      arrTemp.push(
        <ProgressSquare
          key={`progressSquare${i}`}
          squareNum={i}
          currentQuestion={currentNumber}
        />
      )
    }

    return arrTemp
  }, [quizzesData])

  return (
    <SProgressBar
      variants={vProgressBar}
      initial="initial"
      animate="animate"
      exit="initial"
      role="progressbar"
    >
      {squaresArr}
    </SProgressBar>
  )
}

export default ProgressBar
