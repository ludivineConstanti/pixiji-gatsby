import React from "react"
import axios from "axios"

export const onSubmit = async (e, feedback, setFeedback, setIsLoggedIn) => {
  e.preventDefault()
  setFeedback({ ...feedback, message: "Loading..." })

  const email = e.target[0].value
  const password1 = e.target[1].value
  const password2 = e.target[2].value

  const arrPasswordProblems = []

  if (!/[0-9]/.test(password1)) {
    arrPasswordProblems.push("Contain at least 1 number")
  }
  if (!/[$&+,:;=?@#|'"§<>.\-_^\/\*()%!`]/.test(password1)) {
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
          <hX>Sorry, the passwords need to:</hX>
          <ul>
            {arrPasswordProblems.map(problem => (
              <li>{problem}</li>
            ))}
          </ul>
        </>
      ),
    })
    return
  }
  const response = await axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `mutation createUser($email: String!, $password: String!) {
      createUser(user: {email: $email, password: $password}) {
        success
        message
      }
    }
      `,
      variables: {
        email,
        password: password1,
      },
    },
  })
  if (response.status !== 200) {
    setFeedback({ success: false, result: response.statusText })
    return
  }
  const result = response.data.data.createUser
  setFeedback(result)
  setIsLoggedIn(email)
}
