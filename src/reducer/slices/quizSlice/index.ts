import { createSlice } from "@reduxjs/toolkit"

import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import {
  sortWrongAnswers,
  initializeQuizState,
  emptyAnswer,
  kanjisInitial,
} from "./helpers"
import {
  InitialStateProps,
  UpdateIdQuizProps,
  InitializeQuizProps,
  NextQuestionQuizProps,
  CheatingButtonFinishQuizProps,
  AnsweredQuestionQuizProps,
  UpdateWrongAnswersProps,
} from "./models"
import { returnformattedDate } from "src/helpers/index"

const initialState: InitialStateProps = {
  data: [],
  currentQuizId: 1,
}

export const quizSlice = createSlice({
  name: "quiz",
  initialState,

  reducers: {
    resetStateQuiz: state => {
      state.data = []
    },
    updateIdQuiz: (state, { payload }: UpdateIdQuizProps) => {
      state.currentQuizId = payload.quizId
    },
    initializeQuiz: (state, { payload }: InitializeQuizProps) => {
      initializeQuizState({
        state,
        quizId: payload.quizId,
        kanjis: payload.kanjis,
      })

      state.currentQuizId = payload.quizId
    },
    answeredQuestionQuiz: (state, { payload }: AnsweredQuestionQuizProps) => {
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

      const date = returnformattedDate()

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
    nextQuestionQuiz: (state, { payload }: NextQuestionQuizProps) => {
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
      { payload }: CheatingButtonFinishQuizProps
    ) => {
      const currentQuiz = state.data.filter(
        data => data.quizId === payload.quizId
      )[0]

      if (currentQuiz === undefined) {
        return
      }

      if (currentQuiz.finished === false) {
        currentQuiz.formattedQuiz.forEach(e => {
          const { answerIndex } = e.infosAnswer
          currentQuiz.rightAnswers.push({
            answer: e.arrAnswers[answerIndex],
            infosAnswer: { ...e.infosAnswer, answerIndex },
          })
        })

        while (
          currentQuiz.wrongAnswers.length < currentQuiz.rightAnswers.length
        ) {
          currentQuiz.wrongAnswers.push(emptyAnswer)
        }

        currentQuiz.wrongAnswers = sortWrongAnswers(currentQuiz.wrongAnswers)
        currentQuiz.formattedQuiz = quizFormatter(kanjisInitial)
        currentQuiz.finished = true
      } else {
        initializeQuizState({
          state,
          quizId: payload.quizId,
          kanjis: payload.kanjis,
        })
      }
    },
    updateWrongAnswers: (state, { payload }: UpdateWrongAnswersProps) => {
      // reset all the quizzes => showing a mix between data contained in local memory
      // and data received from the server could be confusing, for the user
      state.data = []

      const neededQuizIds: number[] = []

      payload.answers.forEach(answer => {
        if (!neededQuizIds.includes(answer.quizId)) {
          neededQuizIds.push(answer.quizId)
        }
      })

      neededQuizIds.forEach(quizId => {
        const currentWrongAnswers = payload.answers.filter(
          e => e.quizId === quizId
        )
        const currentKanjis = payload.kanjis
          .filter(e => e.quizId === quizId)
          .map(e => e.kanjiId)
        initializeQuizState({
          state,
          quizId,
          kanjis: currentKanjis,
          wrongAnswers: currentWrongAnswers,
        })
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
