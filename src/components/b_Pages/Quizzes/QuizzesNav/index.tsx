import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SSQuizzesNav, { SNavSquare } from "./style"
import { QuizIdOptions } from "src/models/models"

const vNavSquare = {
  initial: { scale: 0 },
  animate: { scale: 1 },
  whileHover: { scale: 1.25 },
}

interface QueryProps {
  allQuiz: {
    nodes: {
      quizId: QuizIdOptions
      slug: string
    }[]
  }
}

interface QuizzesNavProps {
  currentQuizId: number
  prevQuiz: number | boolean
  nextQuiz: number | boolean
}

const QuizzesNav = ({ prevQuiz, nextQuiz, currentQuizId }: QuizzesNavProps) => {
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

  return (
    <SSQuizzesNav s={{ prevQuiz, nextQuiz }}>
      {allQuiz.nodes.map(data => (
        <SNavSquare
          to={`/quizzes/${data.slug}`}
          key={`navSquare${data.quizId}`}
          s={{ color: currentQuizId === data.quizId ? "#FFF" : "none" }}
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
