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

interface QuizProps {
  currentQuiz: {
    id: 1 | 2 | 3
    title: string
    slug: string
  }
}

const Quiz = ({ currentQuiz }: QuizProps) => {
  const { allKanjisJson } = useStaticQuery(graphql`
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

  const finishedQuiz = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].finished
  )
  const kanjisArr = useAppSelector(
    state => state.quiz[`quiz${state.quiz.currentQuizId}`].rightAnswers
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
  }, [allKanjisJson])

  useEffect(() => {
    if (kanjis.length) {
      dispatch(updateIdQuiz({ quizId: currentQuiz.id, slug: currentQuiz.slug }))
      dispatch(
        initializeQuiz({
          quizId: currentQuiz.id,
          kanjis,
        })
      )
    }
  }, [kanjis, currentQuiz.id, currentQuiz.slug, currentQuiz.title])

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
        <AnimatePresence exitBeforeEnter>
          {finishedQuiz ? <StateFinished kanjis={kanjis} /> : <StatePlaying />}
        </AnimatePresence>
      </SQuiz>
    </>
  )
}

export default Quiz
