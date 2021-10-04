import axios from "axios"

import { updateEmail } from "src/reducer/slices/globalSlice"
import { updateWrongAnswers } from "src/reducer/slices/quizSlice"
import { AppDispatch } from "src/store"

export const onSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  feedback: {
    success: boolean
    message: string
  },
  setFeedback: React.Dispatch<
    React.SetStateAction<{
      success: boolean
      message: string
    }>
  >,
  dispatch: AppDispatch
) => {
  e.preventDefault()
  setFeedback({ ...feedback, message: "Loading..." })
  const email = e.target[0].value
  const password = e.target[1].value
  const responseLogIn = await axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `query getUser($email: String!, $password: String!) {
        getUser(input: {email: $email, password: $password}){
          success
          message
        }
      }
        `,
      variables: {
        email,
        password,
      },
    },
  })
  if (responseLogIn.status !== 200) {
    setFeedback({ success: false, message: responseLogIn.statusText })
    return
  }
  const result = responseLogIn.data.data.getUser
  if (result.success) {
    dispatch(updateEmail(email))
  }
  setFeedback(result)

  if (!result.success) {
    return
  }
  const responseWorstScores = await axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `query getWorstScores($email: String) {
        getWorstScores(input: {email: $email}){
          quiz1 {
            ...FragmentScore
          }
          quiz2 {
            ...FragmentScore
          }
          quiz3 {
            ...FragmentScore
          }
        }
      }
  
      fragment FragmentScore on BadScore {
        answer {
          id
          kanji
          en
          kana
          kanaEn
          quizId
        }
        infosAnswer {
          answeredRight
          answeredWrong
        }
      }
        `,
      variables: {
        email,
      },
    },
  })
  console.log(responseWorstScores)
  console.log(responseWorstScores.data.data)
  console.log(responseWorstScores.data.data.getWorstScores)
  dispatch(updateWrongAnswers(responseWorstScores.data.data.getWorstScores))
}
