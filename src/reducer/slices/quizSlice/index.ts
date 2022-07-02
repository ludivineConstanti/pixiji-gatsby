import { createSlice } from "@reduxjs/toolkit"

import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import {
  sortWrongAnswers,
  initialize,
  emptyAnswer,
  kanjisInitial,
} from "./helpers"
import { QuizIdOptions } from "src/models/models"

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    data: [],
    currentQuizId: 1,
  },

  reducers: {
    resetStateQuiz: state => {
      state.data = []
    },
    updateIdQuiz: (
      state,
      { payload }: { payload: { quizId: QuizIdOptions } }
    ) => {
      state.currentQuizId = payload.quizId
    },
    initializeQuiz: (
      state,
      {
        payload,
      }: {
        payload: {
          quizId: QuizIdOptions
          kanjis: number[]
        }
      }
    ) => {
      const currentQuiz = state.data.filter(data => data.id === payload.quizId)
      if (!currentQuiz.length || currentQuiz[0].finished) {
        const quizInitialData = initialize(payload)

        state.data = state.data.filter(e => e.quizId !== payload.quizId)
        state.data.push(quizInitialData)
      }
      state.currentQuizId = payload.quizId
    },
    answeredQuestionQuiz: (state, { payload }) => {
      // {quizId: num, answer: answerObj}
      const { quizId, answer } = payload
      const currentQuiz = state.data.filter(data => data.quizId === quizId)[0]

      if (!currentQuiz) {
        return
      }

      currentQuiz.answeredQuestion = answer

      const { infosAnswer } = currentQuiz.formattedQuiz[0]

      const answeredRight =
        answer ===
        currentQuiz.formattedQuiz[0].arrAnswers[infosAnswer.answerIndex]

      const date = new Date().toString()

      if (answeredRight) {
        currentQuiz.answeredCorrectly = true
        currentQuiz.formattedQuiz[0].infosAnswer.answeredRight.push(date)
        infosAnswer.answeredRight.push(date)
        currentQuiz.rightAnswers = [
          ...currentQuiz.rightAnswers,
          { answer, infosAnswer },
        ]
        if (currentQuiz.totalQuestions === currentQuiz.rightAnswers.length) {
          currentQuiz.finished = true
        }
        if (currentQuiz.wrongAnswers.length < currentQuiz.rightAnswers.length) {
          currentQuiz.wrongAnswers = [...currentQuiz.wrongAnswers, emptyAnswer]
        }
      }
      if (!answeredRight) {
        const wrongAnswer = currentQuiz.wrongAnswers.filter(
          e => e.answer === answer
        )[0]
        if (!wrongAnswer) {
          currentQuiz.formattedQuiz[0].infosAnswer.answeredWrong.push(date)
          infosAnswer.answeredWrong.push(date)
          currentQuiz.wrongAnswers = [
            ...currentQuiz.wrongAnswers,
            { answer, infosAnswer },
          ]
        }
        if (wrongAnswer) {
          wrongAnswer.infosAnswer.answeredWrong.push(date)
        }
      }

      currentQuiz.wrongAnswers = sortWrongAnswers(currentQuiz.wrongAnswers)
    },
    nextQuestionQuiz: (
      state,
      { payload }: { payload: { quizId: QuizIdOptions } }
    ) => {
      const currentQuiz = state.data.filter(
        data => data.quizId === payload.quizId
      )[0]

      if (!currentQuiz) {
        return
      }

      const currentQuestion = currentQuiz.formattedQuiz[0]
      currentQuiz.formattedQuiz.shift()
      if (!currentQuiz.answeredCorrectly) {
        currentQuiz.formattedQuiz = [
          ...currentQuiz.formattedQuiz,
          currentQuestion,
        ]
      }
      currentQuiz.answeredQuestion = false
      currentQuiz.answeredCorrectly = false
    },
    cheatingButtonFinishQuiz: (
      state,
      {
        payload,
      }: {
        payload: {
          quizId?: QuizIdOptions
          kanjis: number[]
        }
      }
    ) => {
      const quizId = payload.quizId || state.currentQuizId
      const currentQuiz = state.data.filter(
        data => data.quizId === payload.quizId
      )[0]

      if (!currentQuiz) {
        return
      }

      if (!currentQuiz.finished) {
        currentQuiz.formattedQuiz.forEach(e => {
          const { answerIndex } = e.infosAnswer
          currentQuiz.rightAnswers.push({
            answer: e.arrAnswers[answerIndex],
            infosAnswer: { ...e.infosAnswer, answerIndex },
          })
        })
        currentQuiz.wrongAnswers = sortWrongAnswers(currentQuiz.wrongAnswers)

        currentQuiz.formattedQuiz = quizFormatter(kanjisInitial)
        currentQuiz.finished = true
      } else {
        initialize({
          quizId,
          ...payload,
        })
      }
    },
    updateWrongAnswers: (state, { payload }) => {
      // TO DO! (for when the responseWorstScore request is executed)
      state.data.forEach(quiz => {
        quiz.wrongAnswers = sortWrongAnswers([...quiz.wrongAnswers])
      })
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
