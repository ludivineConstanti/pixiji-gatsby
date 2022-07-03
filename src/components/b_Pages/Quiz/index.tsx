import React, { useEffect, useMemo } from "react"
import { AnimatePresence } from "framer-motion"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import { updateIdQuiz, initializeQuiz } from "src/reducer/slices/quizSlice"
import IlluQuiz from "src/components/d_Illustrations/IlluQuiz"
import SQuiz from "./style"
import Header from "./Header"
import StatePlaying from "./StatePlaying"
import StateFinished from "./StateFinished"
import Warning from "./Warning"
import { QuizIdOptions } from "src/models/models"

interface QueryProps {
  allKanjisJson: {
    nodes: {
      kanjiId: number
      quizId: number
    }[]
  }
}

interface QuizProps {
  currentQuiz: {
    id: QuizIdOptions
    title: string
    slug: string
  }
}

const Quiz = ({ currentQuiz }: QuizProps) => {
  const { allKanjisJson } = useStaticQuery<QueryProps>(graphql`
    query {
      allKanjisJson {
        nodes {
          quizId
          kanjiId
        }
      }
    }
  `)

  const dispatch = useAppDispatch()

  const currentQuizData = useAppSelector(state => state.quiz.data).filter(
    data => data.quizId === currentQuiz.id
  )
  const isLoggedIn = useAppSelector(state => !!state.global.email)

  const kanjis = useMemo(() => {
    if (allKanjisJson.nodes.length) {
      return allKanjisJson.nodes
        .filter(e => e.quizId === currentQuiz.id)
        .map(e => {
          return e.kanjiId
        })
    }
  }, [allKanjisJson, currentQuiz.id])

  useEffect(() => {
    if (kanjis.length && currentQuizData.length === 0) {
      dispatch(updateIdQuiz({ quizId: currentQuiz.id }))
      dispatch(
        initializeQuiz({
          quizId: currentQuiz.id,
          kanjis,
        })
      )
    }
  }, [kanjis, currentQuiz.id])

  const kanjisArr = currentQuizData.length
    ? currentQuizData[0].rightAnswers
    : []

  return (
    <>
      <IlluQuiz
        currentQuizId={currentQuiz.id}
        kanjisArr={kanjisArr.map(e => {
          if (e.answer) {
            return e.answer
          }
        })}
      />
      <SQuiz>
        <Header />
        {!isLoggedIn && <Warning />}
        <AnimatePresence exitBeforeEnter={true}>
          {currentQuizData.length > 0 && currentQuizData[0].finished ? (
            <StateFinished kanjis={kanjis} />
          ) : (
            <StatePlaying />
          )}
        </AnimatePresence>
      </SQuiz>
    </>
  )
}

export default Quiz
