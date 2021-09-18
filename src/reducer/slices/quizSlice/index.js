import { createSlice } from "@reduxjs/toolkit"

import { kanjisInitial } from "src/assets/dataQuiz/kanjisInitial"
import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import {
  initialState,
  emptyAnswer,
  initialize,
  getWrongAnsweredDisplayed,
} from "./helpers"

export const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    resetStateQuiz: state => {
      // putting state = initialState directly doesn't work
      const stateKeys = Object.keys(state)
      stateKeys.forEach(key => {
        state[key] = initialState[key]
      })
    },
    updateIdQuiz: (state, { payload }) => {
      // { quizId, slug}
      state.currentQuizId = payload.quizId
      state.currentSlug = payload.slug
    },
    initializeQuiz: (state, { payload }) => {
      // {quizId: number}
      const cQ = state[`quiz${payload.quizId}`]
      if (!cQ.rightAnswers.length) {
        initialize(state, payload)
      }
      state.currentQuizId = payload.quizId
    },
    answeredQuestionQuiz: (state, { payload }) => {
      // {quizId: num, answer: answerObj}
      const cQ = state[`quiz${payload.quizId}`]

      cQ.answeredQuestion = payload.answer.id

      const { infosAnswer } = cQ.dataQuiz[0]

      const answeredRight =
        payload.answer.id ===
        cQ.dataQuiz[0].arrAnswers[infosAnswer.answerIndex].id

      if (answeredRight) {
        cQ.answeredCorrectly = true
        cQ.dataQuiz[0].infosAnswer.answeredRight += 1
        cQ.rightAnswers = [
          ...cQ.rightAnswers,
          { answer: payload.answer, infosAnswer },
        ]
        if (cQ.totalQuestions === cQ.rightAnswers.length) {
          cQ.finished = true
        }
      }
      if (!answeredRight) {
        cQ.dataQuiz[0].infosAnswer.answeredWrong += 1
        cQ.wrongAnswers = [
          ...cQ.wrongAnswers,
          { answer: payload.answer, infosAnswer },
        ]
      }

      cQ.wrongAnswers = cQ.wrongAnswers.sort(
        (a, b) => a.infosAnswer.answeredWrong - b.infosAnswer.answeredWrong
      )

      cQ.wrongAnswersDisplayed = getWrongAnsweredDisplayed(
        cQ.rightAnswers,
        cQ.wrongAnswers
      )
    },
    nextQuestionQuiz: (state, { payload }) => {
      // {quizId: num}
      const cQ = state[`quiz${payload.quizId}`]

      const currentQuestion = cQ.dataQuiz[0]
      cQ.dataQuiz.shift()
      if (!cQ.answeredCorrectly) {
        cQ.dataQuiz = [...cQ.dataQuiz, currentQuestion]
      }
      cQ.answeredQuestion = false
      cQ.answeredCorrectly = false
    },
    cheatingButtonFinishQuiz: (state, { payload }) => {
      const cQ = state[`quiz${payload.quizId}`]

      if (!cQ.finished) {
        cQ.dataQuiz.forEach(e => {
          const { answerIndex } = e.infosAnswer
          cQ.rightAnswers.push({
            answer: e.arrAnswers[answerIndex],
            infosAnswer: { ...e.infosAnswer, answerIndex },
          })
        })
        cQ.wrongAnswers = cQ.wrongAnswers.sort(
          (a, b) => a.infosAnswer.answeredWrong - b.infosAnswer.answeredWrong
        )

        cQ.wrongAnswersDisplayed = getWrongAnsweredDisplayed(
          cQ.rightAnswers,
          cQ.wrongAnswers
        )

        cQ.dataQuiz = quizFormatter(kanjisInitial)
        cQ.finished = true
      } else {
        initialize(state, { quizId: payload.quizId })
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const {
  resetStateQuiz,
  updateIdQuiz,
  initializeQuiz,
  answeredQuestionQuiz,
  nextQuestionQuiz,
  cheatingButtonFinishQuiz,
} = quizSlice.actions

export default quizSlice.reducer
