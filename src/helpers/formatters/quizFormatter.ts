import { shuffle } from "../shuffle"

export const quizFormatter = (dataQuiz: number[]) => {
  shuffle(dataQuiz)
  const answers11 = 11 - (dataQuiz.length % 12) + 1
  if (answers11 - 1 > dataQuiz.length / 12) {
    // tslint:disable-next-line:no-console
    console.error(
      "the current quizFormatter does not work for this data length"
    )
  }
  const answers12 = Math.ceil(dataQuiz.length / 12) - answers11
  const quizFormatted = []
  const answeredDefault: string[] = []
  const infosAnswer = (num: number) => ({
    answerIndex: Math.floor(Math.random() * num),
    answeredRight: answeredDefault,
    answeredWrong: answeredDefault,
  })
  for (let i = 0; i < answers12; i += 1) {
    quizFormatted.push({
      infosAnswer: infosAnswer(12),
      arrAnswers: dataQuiz.slice(i * 12, i * 12 + 12),
    })
  }
  const offset = answers12 * 12
  for (let i = 0; i < answers11; i += 1) {
    quizFormatted.push({
      infosAnswer: infosAnswer(11),
      arrAnswers: dataQuiz.slice(offset + i * 11, offset + (i * 11 + 11)),
    })
  }
  return quizFormatted
}
