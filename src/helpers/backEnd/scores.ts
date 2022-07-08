import axios from "axios"

interface GetWorstScoresProps {
  email: string
}

export const getWorstScores = ({ email }: GetWorstScoresProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `
      query getWorstScores($email: String) {
        getWorstScores(input: {email: $email}) {
          scores {
           answer
            infosAnswer {
              answeredRight
              answeredWrong
            }
          }
        }
      }
        `,
      variables: {
        email,
      },
    },
  })

interface GetScoreProps {
  email: string
  kanjiId: string
}

export const getScore = ({ email, kanjiId }: GetScoreProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `
      query getScore($email: String, $kanjiId: String!) {
        getScore(input: {email: $email, kanjiId: $kanjiId}) {
          answer
          infosAnswer {
            answeredRight
            answeredWrong
          }
        }
      }
        `,
      variables: {
        email,
        kanjiId,
      },
    },
  })

interface SetScoresProps {
  email: string
  kanjiId: string
  isCorrect: boolean
}

export const setScore = ({ email, kanjiId, isCorrect }: SetScoresProps) =>
  axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `
      mutation setScore($email: String!, $kanjiId: String!, $isCorrect: Boolean!) {
        setScore(input: {email: $email, kanjiId: $kanjiId, isCorrect: $isCorrect}) {
          success
          message
        }
      }
          `,
      variables: {
        email,
        kanjiId,
        isCorrect,
      },
    },
  })
