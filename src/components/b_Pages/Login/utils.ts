import { updateEmail } from "src/reducer/slices/globalSlice"
import { AppDispatch } from "src/store"
import { getUser } from "src/helpers/backEnd/users"

export const onSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
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
  event.preventDefault()
  setFeedback({ ...feedback, message: "Loading..." })

  const email = event.target[0].value
  const password = event.target[1].value

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
}
