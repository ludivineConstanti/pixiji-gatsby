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

  // need to do it in various step so that typescripts types it correctly
  const target = event.target as HTMLFormElement

  const emailElement = target[0] as HTMLInputElement
  const email = emailElement.value

  const passwordElement = target[1] as HTMLInputElement
  const password = passwordElement.value

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
