import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import { QuizIdOptions } from "src/models/models"
import { RightOrWrongAnswerProps } from "./models"

export const kanjisInitial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const emptyAnswerAnsweredWrong: string[] = []
const dateInStringFormat = new Date().toString()

export const emptyAnswer = {
  answer: 1,
  infosAnswer: {
    answerIndex: 1,
    answeredRight: [dateInStringFormat],
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
  const rightAnswers: RightOrWrongAnswerProps[] = []
  const wrongAnswers: RightOrWrongAnswerProps[] = []

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
