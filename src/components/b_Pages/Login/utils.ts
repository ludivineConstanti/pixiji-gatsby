import { updateEmail } from "src/reducer/slices/globalSlice"
import { updateWrongAnswers } from "src/reducer/slices/quizSlice"
import { AppDispatch } from "src/store"
import { getUser } from "src/helpers/backEnd/users"
import { getWorstScores } from "src/helpers/backEnd/scores"

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

  const responseLogIn = await getUser({ email, password })

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
  const responseWorstScores = await getWorstScores({ email })

  console.log(responseWorstScores)
  console.log(responseWorstScores.data.data)
  console.log(responseWorstScores.data.data.getWorstScores)
  dispatch(updateWrongAnswers(responseWorstScores.data.data.getWorstScores))
}
