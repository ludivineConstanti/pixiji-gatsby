import { createSlice } from "@reduxjs/toolkit"

import { kanjisInitial } from "src/assets/dataQuiz/kanjisInitial"
import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import {
  initialState,
  sortWrongAnswers,
  initialize,
  emptyAnswer,
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
      const { quizId, answer } = payload
      const cQ = state[`quiz${quizId}`]

      cQ.answeredQuestion = answer.id

      const { infosAnswer } = cQ.dataQuiz[0]

      const answeredRight =
        answer.id === cQ.dataQuiz[0].arrAnswers[infosAnswer.answerIndex].id

      if (answeredRight) {
        cQ.answeredCorrectly = true
        cQ.dataQuiz[0].infosAnswer.answeredRight += 1
        infosAnswer.answeredRight += 1
        cQ.rightAnswers = [...cQ.rightAnswers, { answer, infosAnswer }]
        if (cQ.totalQuestions === cQ.rightAnswers.length) {
          cQ.finished = true
        }
        if (cQ.wrongAnswers.length < cQ.rightAnswers.length) {
          cQ.wrongAnswers = [...cQ.wrongAnswers, emptyAnswer]
        }
      }
      if (!answeredRight) {
        const wrongAnswer = cQ.wrongAnswers.filter(
          e => e.answer.id === answer.id
        )[0]
        if (!wrongAnswer) {
          cQ.dataQuiz[0].infosAnswer.answeredWrong += 1
          infosAnswer.answeredWrong += 1
          cQ.wrongAnswers = [...cQ.wrongAnswers, { answer, infosAnswer }]
        }
        if (wrongAnswer) {
          wrongAnswer.infosAnswer.answeredWrong += 1
        }
      }

      cQ.wrongAnswers = sortWrongAnswers(cQ.wrongAnswers)
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
        cQ.wrongAnswers = sortWrongAnswers(cQ.wrongAnswers)

        cQ.dataQuiz = quizFormatter(kanjisInitial)
        cQ.finished = true
      } else {
        initialize(state, { quizId: payload.quizId })
      }
    },
    updateWrongAnswers: (state, { payload }) => {
      for (let i = 1; i < 4; i++) {
        const cQ = state[`quiz${i}`]
        cQ.wrongAnswers = sortWrongAnswers([
          ...payload[`quiz${i}`],
          ...cQ.wrongAnswers,
        ])
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
  updateWrongAnswers,
} = quizSlice.actions

export default quizSlice.reducer
