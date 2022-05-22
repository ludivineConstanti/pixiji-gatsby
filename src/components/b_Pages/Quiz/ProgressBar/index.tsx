import React, { useMemo } from "react"

import SProgressBar from "./style"
import ProgressSquare from "../ProgressSquare"
import { useAppSelector } from "src/store"

const vProgressBar = {
  initial: { marginTop: 0 },
  animate: { marginTop: "16px" },
}

const ProgressBar = () => {
  const questionNumber = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].totalQuestions
  )
  const currentNumber = useAppSelector(state => {
    const current = `quiz${state.quiz.currentQuizId}`
    return (
      state.quiz[current].totalQuestions - state.quiz[current].dataQuiz.length
    )
  })

  const squaresArr = useMemo(() => {
    const arrTemp = []

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
  }, [questionNumber, currentNumber])

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
