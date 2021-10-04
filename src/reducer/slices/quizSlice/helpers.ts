import { kanjis } from "src/assets/dataQuiz/kanjis"
import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import { kanjisInitial } from "src/assets/dataQuiz/kanjisInitial"
import { quizzes } from "src/assets/dataQuiz/quizzes"
import { RootState } from "src/store"

export const initialStateQuiz = (quizId: number) => {
  const currentQuiz = kanjis.filter(e => e.quizId === quizId)
  const rightAnswers: [] = []
  const wrongAnswers: [] = []

  interface ReturnedState {
    dataQuiz: {
      infosAnswer: {
        answerIndex: number
        answeredRight: number
        answeredWrong: number
      }
      arrAnswers: any
    }[]
    totalQuestions: number
    totalOptions: number
    title: string
    finished: boolean
    answeredQuestion: boolean
    answeredCorrectly: boolean
    rightAnswers: any
    wrongAnswers: any
  }

  const returnedState: ReturnedState = {
    dataQuiz: quizFormatter(kanjisInitial),
    totalQuestions: 0,
    totalOptions: currentQuiz.length,
    title: quizzes[quizId - 1].title,
    finished: false,
    answeredQuestion: false,
    answeredCorrectly: false,
    rightAnswers,
    wrongAnswers,
  }

  return returnedState
}

export const initialState = {
  dataQuizzes: quizzes,
  currentQuizId: 1,
  currentSlug: quizzes[0].slug,
  quiz1: initialStateQuiz(1),
  quiz2: initialStateQuiz(2),
  quiz3: initialStateQuiz(3),
}

export const emptyAnswer = {
  answer: {
    kanji: "",
    en: "",
    kana: "",
    kanaEn: "",
  },
  infosAnswer: { answeredRight: 1, answeredWrong: 0 },
}

// put it there since I need it in 2 different actions
export const initialize = (
  state: RootState,
  payload: { quizId: 1 | 2 | 3 }
) => {
  const { quizId } = payload

  const cQ = state[`quiz${quizId}`]
  const currentQuiz = kanjis.filter(e => e.quizId === quizId)
  const formattedQuiz = quizFormatter(currentQuiz)
  cQ.dataQuiz = formattedQuiz

  if (cQ.totalQuestions === 0) {
    cQ.totalQuestions = formattedQuiz.length
  }

  cQ.finished = false
  cQ.answeredQuestion = false
  cQ.answeredCorrectly = false
  cQ.rightAnswers = []
}

export const sortWrongAnswers = (
  wrongAnswers: {
    infosAnswer: { answeredWrong: number; answeredRight: number }
  }[]
) => {
  return wrongAnswers.sort(
    (a, b) =>
      b.infosAnswer.answeredWrong -
      b.infosAnswer.answeredRight -
      (a.infosAnswer.answeredWrong - a.infosAnswer.answeredRight)
  )
}
