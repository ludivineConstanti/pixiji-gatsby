import React from "react"

import SSQuizzesNav, { SNavSquare } from "./SQuizzesNav"
import { useAppSelector } from "src/store"

interface QuizzesNavProps {
  currentQuizId: number
  prevQuiz: number | boolean
  nextQuiz: number | boolean
}

const QuizzesNav = ({ prevQuiz, nextQuiz, currentQuizId }: QuizzesNavProps) => {
  const quizzesData = useAppSelector(state => state.quiz.dataQuizzes)

  const vNavSquare = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    whileHover: { scale: 1.25 },
  }
  return (
    <SSQuizzesNav s={{ prevQuiz, nextQuiz }}>
      {quizzesData.map(quiz => (
        <SNavSquare
          to={`/quizzes/${quiz.slug}`}
          key={`navSquare${quiz.id}`}
          s={{ color: currentQuizId === quiz.id ? "#FFF" : "none" }}
          variants={vNavSquare}
          whileHover="whileHover"
          initial="initial"
          animate="animate"
          exit="initial"
        />
      ))}
    </SSQuizzesNav>
  )
}

export default QuizzesNav
