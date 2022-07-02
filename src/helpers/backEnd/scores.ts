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
