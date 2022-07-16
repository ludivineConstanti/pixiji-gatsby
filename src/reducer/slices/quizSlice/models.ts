interface InfosAnswerProps {
  answerIndex: number
  answeredRight: string[]
  answeredWrong: string[]
}

export interface RightOrWrongAnswerProps {
  answer: number
  infosAnswer: InfosAnswerProps
}

export interface AnswerPropsForWorstScores extends RightOrWrongAnswerProps {
  quizId: number
}

export interface InitialStateProps {
  data: {
    formattedQuiz: { infosAnswer: InfosAnswerProps; arrAnswers: number[] }[]
    totalQuestions: number
    quizId: number
    finished: boolean
    answeredQuestion: boolean | number
    answeredCorrectly: boolean
    rightAnswers: RightOrWrongAnswerProps[]
    wrongAnswers: RightOrWrongAnswerProps[]
  }[]
  currentQuizId: number
}

export interface UpdateIdQuizProps {
  payload: { quizId: number }
}

export interface InitializeQuizProps {
  payload: {
    quizId: number
    kanjis: number[]
  }
}

export interface AnsweredQuestionQuizProps {
  payload: {
    quizId: number
    answer: number
  }
}

export interface NextQuestionQuizProps {
  payload: { quizId: number }
}

export interface CheatingButtonFinishQuizProps {
  payload: {
    quizId: number
    kanjis: number[]
  }
}

export interface UpdateWrongAnswersProps {
  payload: {
    answers: AnswerPropsForWorstScores[]
    kanjis: { kanjiId: number; quizId: number }[]
  }
}
