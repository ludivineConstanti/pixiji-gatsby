import React from "react"

import { updateEmail } from "src/reducer/slices/globalSlice"
import { AppDispatch } from "src/store"
import { createUser } from "src/helpers/backEnd/users"

export const onSubmit = async (
  e: React.FormEvent<HTMLFormElement>,
  feedback: {
    success: boolean
    message: string
  },
  setFeedback: React.Dispatch<
    React.SetStateAction<{
      success: boolean
      message: string | JSX.Element
    }>
  >,
  dispatch: AppDispatch
) => {
  e.preventDefault()
  setFeedback({ ...feedback, message: "Loading..." })

  const email: string = e.target[0].value
  const password1: string = e.target[1].value
  const password2: string = e.target[2].value

  const arrPasswordProblems = []

  if (!/[0-9]/.test(password1)) {
    arrPasswordProblems.push("Contain at least 1 number")
  }
  if (!/[$&+,:;=?@#|'"§<>.\-_^/*()%!`]/.test(password1)) {
    arrPasswordProblems.push("Contain at least 1 special character")
  }
  if (password1.length < 8) {
    arrPasswordProblems.push("Be at least 8 characters long")
  }
  if (password1 !== password2) {
    arrPasswordProblems.push("Be identical")
  }
  if (arrPasswordProblems.length > 0) {
    setFeedback({
      ...feedback,
      message: (
        <>
          <p>Sorry, the passwords need to:</p>
          <ul>
            {arrPasswordProblems.map((problem, i) => (
              <li key={`passwordProblemLi${problem}${i}`}>{problem}</li>
            ))}
          </ul>
        </>
      ),
    })
    return
  }
  const response = await createUser({ email, password: password1 })

  if (response.status !== 200) {
    setFeedback({ success: false, message: response.statusText })
    return
  }

  const result = response.data.data.createUser

  setFeedback(result)
  dispatch(updateEmail(email))
}
