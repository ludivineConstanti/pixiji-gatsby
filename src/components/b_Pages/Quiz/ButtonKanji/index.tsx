import React, { useState, useEffect, memo } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Variants } from "framer-motion"

import { useAppDispatch, useAppSelector } from "src/store"
import { answeredQuestionQuiz } from "src/reducer/slices/quizSlice"
import { strokeWidth } from "src/styles/g"
import SButtonKanji, { SText } from "./style"
import { setScore } from "src/helpers/backEnd/scores"

interface QueryProps {
  allKanjisJson: {
    nodes: {
      kanjiId: number
      kanji: string
    }[]
  }
}

interface ButtonKanjiProps {
  quizId: number
  disabled: boolean | number
  kanjiId: number
}

const ButtonKanji = ({ quizId, kanjiId, disabled }: ButtonKanjiProps) => {
  const { allKanjisJson } = useStaticQuery<QueryProps>(graphql`
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

  const quizzesData = useAppSelector(state => state.quiz.data)
  const currentQuizData = quizzesData.filter(data => data.quizId === quizId)
  const answeredQuestion = currentQuizData[0].answeredQuestion
  const correctAnswer =
    currentQuizData[0].formattedQuiz[0].arrAnswers[
      currentQuizData[0].formattedQuiz[0].infosAnswer.answerIndex
    ]

  const isCorrect = kanjiId === correctAnswer

  const [wasClicked, setWasClicked] = useState(false)

  const [vButtonKanji, setVButtonKanji] = useState<Variants>({
    initial: { scaleX: 0, x: 150 },
    animate: { scaleX: 1, x: 0 },
    exit: { scaleX: 0, x: -150 },
    whileHoverOn: { scale: 1.25, backgroundColor: colorMain },
  })

  useEffect(() => {
    let newVariantAnimate

    if (!answeredQuestion) {
      newVariantAnimate = {
        ...vButtonKanji.animate,
        scale: 1,
      }
    } else if (!wasClicked && isCorrect && cheating) {
      newVariantAnimate = {
        ...vButtonKanji.animate,
        scale: 0.6,
        border: `${strokeWidth} solid rgba(255, 255, 255, 1)`,
      }
    } else if (wasClicked && isCorrect) {
      newVariantAnimate = {
        ...vButtonKanji.animate,
        scale: 1,
        border: `${strokeWidth * 2} solid rgba(255, 255, 255, 1)`,
      }
    } else if (wasClicked) {
      newVariantAnimate = {
        ...vButtonKanji.animate,
        scale: 1,
        border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)`,
      }
    } else {
      newVariantAnimate = {
        ...vButtonKanji.animate,
        scale: 0.6,
        border: `${strokeWidth} solid rgba(255, 255, 255, 0.25)`,
      }
    }
    setVButtonKanji({
      ...vButtonKanji,
      animate: newVariantAnimate,
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
          setScore({ email, kanjiId: `${kanjiId}`, isCorrect })
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
