import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import { quizzes } from "src/assets/dataQuiz/quizzes"
import { RootState } from "src/store"
import { QuizIdOptions } from "src/models"

export const kanjisInitial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

export const initialStateQuiz = (quizId: number) => {
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
  answer: 1,
  infosAnswer: { answeredRight: 1, answeredWrong: 0 },
}

// put it there since I need it in 2 different actions
export const initialize = (
  state: RootState,
  payload: {
    quizId: QuizIdOptions
    kanjis: number[]
  }
) => {
  const { quizId, kanjis } = payload

  const cQ = state[`quiz${quizId}`]

  const formattedQuiz = quizFormatter(kanjis)

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
