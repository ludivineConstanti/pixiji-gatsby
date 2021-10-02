import React from "react"

import SProgressBar from "./SProgressBar"
import ProgressSquare from "../ProgressSquare"
import { useAppSelector } from "src/store"

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

  const squaresArr = []

  const vProgressBar = {
    initial: { marginTop: 0 },
    animate: { marginTop: "16px" },
  }

  for (let i = 0; i < questionNumber; i += 1) {
    squaresArr.push(
      <ProgressSquare
        key={`progressSquare${i}`}
        squareNum={i}
        currentQuestion={currentNumber}
      />
    )
  }
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
