import React, { useState, useEffect, memo } from "react"
import axios from "axios"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import { answeredQuestionQuiz } from "src/reducer/slices/quizSlice"
import { strokeWidth } from "src/styles/g"
import SButtonKanji, { SText } from "./style"

const sendToAPI = async (
  email: string,
  kanjiId: number,
  isCorrect: boolean
) => {
  await axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `mutation setScore($email: String!, $kanjiId: String!, $isCorrect: Boolean!) {
        setScore(input: {email: $email, kanjiId: $kanjiId, isCorrect: $isCorrect}, ){
        success
        message
      }
    }
      `,
      variables: {
        email,
        kanjiId: `${kanjiId}`,
        isCorrect,
      },
    },
  })
}

interface ButtonKanjiProps {
  quizId: number
  disabled: boolean | number
  kanjiId: number
}

const ButtonKanji = ({ quizId, kanjiId, disabled }: ButtonKanjiProps) => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        nodes {
          kanjiId
          kanji
        }
      }
    }
  `)

  const dispatch = useAppDispatch()

  const kanji = allKanjisJson.nodes.filter(e => e.kanjiId === kanjiId)[0].kanji

  const colorMain = useAppSelector(state => state.global.color.main)
  const email = useAppSelector(state => state.global.email)
  const cheating = useAppSelector(state => state.global.cheating)
  const answeredQuestion = useAppSelector(
    state => !!state.quiz[`quiz${state.quiz.currentQuizId}`].answeredQuestion
  )
  const correctAnswer = useAppSelector(state => {
    const current = `quiz${state.quiz.currentQuizId}`
    return state.quiz[current].dataQuiz[0].arrAnswers[
      state.quiz[current].dataQuiz[0].infosAnswer.answerIndex
    ]
  })

  const isCorrect = kanjiId === correctAnswer

  const [wasClicked, setWasClicked] = useState(false)

  const [vButtonKanji, setVButtonKanji] = useState({
    initial: { scaleX: 0, x: 150 },
    animate: { scaleX: 1, x: 0 },
    exit: { scaleX: 0, x: -150 },
    whileHoverOn: { scale: 1.25, backgroundColor: colorMain },
  })

  useEffect(() => {
    setVButtonKanji({
      ...vButtonKanji,
      // eslint-disable-next-line no-nested-ternary
      animate: !answeredQuestion
        ? {
            ...vButtonKanji.animate,
            scale: 1,
          }
        : !wasClicked && isCorrect && cheating
        ? {
            ...vButtonKanji.animate,
            scale: 0.6,
            border: `${strokeWidth} solid rgba(255, 255, 255, 1)`,
          }
        : // eslint-disable-next-line no-nested-ternary
        wasClicked && isCorrect
        ? {
            ...vButtonKanji.animate,
            scale: 1,
            border: `${strokeWidth * 2} solid rgba(255, 255, 255, 1)`,
          }
        : wasClicked
        ? {
            ...vButtonKanji.animate,
            scale: 1,
            border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)`,
          }
        : {
            ...vButtonKanji.animate,
            scale: 0.6,
            border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)`,
          },
    })
    if (!disabled) {
      setWasClicked(false)
    }
  }, [disabled])

  useEffect(() => {
    setVButtonKanji({
      ...vButtonKanji,
      whileHoverOn: {
        ...vButtonKanji.whileHoverOn,
        backgroundColor: colorMain,
      },
    })
  }, [colorMain])

  return (
    <SButtonKanji
      type="button"
      onClick={() => {
        dispatch(answeredQuestionQuiz({ quizId, answer: kanjiId }))
        setWasClicked(true)
        if (email) {
          sendToAPI(email, kanjiId, isCorrect)
        }
      }}
      disabled={!!disabled}
      s={{
        colorMain,
        isWrong: !isCorrect && cheating,
        cheating,
      }}
      variants={vButtonKanji}
      initial="initial"
      animate="animate"
      exit="exit"
      whileHover={disabled ? "whileHoverOff" : "whileHoverOn"}
    >
      <SText>{kanji}</SText>
    </SButtonKanji>
  )
}

export default memo(ButtonKanji)
