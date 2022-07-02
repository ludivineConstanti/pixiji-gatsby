import { QuizIdOptions } from "src/models/models"

interface InfosAnswerProps {
  answerIndex: number
  answeredRight: string[]
  answeredWrong: string[]
}

export interface RightOrWrongAnswerProps {
  answer: number
  infosAnswer: InfosAnswerProps
}

export interface InitialStateProps {
  data: {
    formattedQuiz: { infosAnswer: InfosAnswerProps; arrAnswers: number[] }[]
    totalQuestions: number
    quizId: QuizIdOptions
    finished: boolean
    answeredQuestion: boolean
    answeredCorrectly: boolean
    rightAnswers: RightOrWrongAnswerProps[]
    wrongAnswers: RightOrWrongAnswerProps[]
  }[]
  currentQuizId: QuizIdOptions
}
