import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import { RootState } from "src/store"
import { QuizIdOptions } from "src/models/models"

export const kanjisInitial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const quizzes = [
  { quizId: 1, slug: "first-grade", title: "1st grade" },
  { quizId: 2, slug: "first-grade", title: "1st grade" },
  { quizId: 3, slug: "first-grade", title: "1st grade" },
]

interface InfosAnswerProps {
  answerIndex: number
  answeredRight: string[]
  answeredWrong: string[]
}

interface RightOrWrongAnswerProps {
  answer: number
  infosAnswer: InfosAnswerProps
}

interface ReturnedStateProps {
  dataQuiz: {
    infosAnswer: InfosAnswerProps
    arrAnswers: number[]
  }[]
  totalQuestions: number
  title: string
  finished: boolean
  answeredQuestion: boolean
  answeredCorrectly: boolean
  rightAnswers: RightOrWrongAnswerProps[]
  wrongAnswers: RightOrWrongAnswerProps[]
}

export const initialStateQuiz = (quizId: number) => {
  const rightAnswers: [] = []
  const wrongAnswers: [] = []

  const returnedState: ReturnedStateProps = {
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
  data: [],
  dataQuizzes: quizzes,
  currentQuizId: 1,
  currentSlug: quizzes[0].slug,
  quiz1: initialStateQuiz(1),
  quiz2: initialStateQuiz(2),
  quiz3: initialStateQuiz(3),
}

const emptyAnswerAnsweredWrong: string[] = []

export const emptyAnswer = {
  answer: 1,
  infosAnswer: {
    answeredRight: [new Date().toString()],
    answeredWrong: emptyAnswerAnsweredWrong,
  },
}

// put it there since I need it in 2 different actions
export const initialize = (payload: {
  quizId: QuizIdOptions
  kanjis: number[]
}) => {
  const { quizId, kanjis } = payload

  const formattedQuiz = quizFormatter(kanjis)
  const rightAnswers: number[] = []

  return {
    quizId,
    formattedQuiz,
    finished: false,
    answeredQuestion: false,
    answeredCorrectly: false,
    rightAnswers,
    totalQuestions: formattedQuiz.length,
  }
}

export const sortWrongAnswers = (wrongAnswers: RightOrWrongAnswerProps[]) => {
  return wrongAnswers.sort(
    (a, b) =>
      b.infosAnswer.answeredWrong.length -
      b.infosAnswer.answeredRight.length -
      (a.infosAnswer.answeredWrong.length - a.infosAnswer.answeredRight.length)
  )
}
