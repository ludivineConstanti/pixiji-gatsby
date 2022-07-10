import { quizFormatter } from "src/helpers/formatters/quizFormatter"
import { RightOrWrongAnswerProps, InitialStateProps } from "./models"
import { returnformattedDate } from "src/helpers/index"

export const kanjisInitial = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

const emptyAnswerAnsweredWrong: string[] = []

export const emptyAnswer = {
  answer: 0,
  infosAnswer: {
    answerIndex: 1,
    answeredRight: [returnformattedDate()],
    answeredWrong: emptyAnswerAnsweredWrong,
  },
}

interface InitializeQuizStateProps {
  state: InitialStateProps
  quizId: number
  kanjis: number[]
  wrongAnswers?: RightOrWrongAnswerProps[]
}

export const initializeQuizState = ({
  state,
  quizId,
  kanjis,
  wrongAnswers,
}: InitializeQuizStateProps) => {
  const currentQuiz = state.data.find(data => data.quizId === quizId)

  const formattedQuiz = quizFormatter(kanjis)
  const rightAnswers: RightOrWrongAnswerProps[] = []
  const answeredQuestion: false | number = false

  const quizInitialData = {
    formattedQuiz,
    totalQuestions: formattedQuiz.length,
    quizId,
    finished: false,
    answeredQuestion,
    answeredCorrectly: false,
    rightAnswers,
    wrongAnswers: wrongAnswers ? wrongAnswers : [],
  }

  // uf wrongAnswers are defined, it means we got it from the backend
  // and state.data has been resetted
  if (!currentQuiz || wrongAnswers) {
    state.data = [...state.data, quizInitialData]
  } else if (currentQuiz.finished) {
    state.data = state.data.map(e => {
      if (e.quizId === quizId) {
        return { ...quizInitialData, ...e.wrongAnswers }
      }
      return e
    })
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
