import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import { QuizIdOptions } from "src/models/models"

export const kanjisInitial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

interface InfosAnswerProps {
  answerIndex: number
  answeredRight: string[]
  answeredWrong: string[]
}

interface RightOrWrongAnswerProps {
  answer: number
  infosAnswer: InfosAnswerProps
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
  const wrongAnswers: number[] = []

  return {
    formattedQuiz,
    totalQuestions: formattedQuiz.length,
    quizId,
    finished: false,
    answeredQuestion: false,
    answeredCorrectly: false,
    rightAnswers,
    wrongAnswers,
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
