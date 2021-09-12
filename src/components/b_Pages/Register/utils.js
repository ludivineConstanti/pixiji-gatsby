import React from "react"
import axios from "axios"

export const feedbackSuccess =
  "Great! You are now registered! You can go to the quizzes page by clicking on the button below."

export const onSubmit = async (e, setFeedback, setIsLoggedIn) => {
  e.preventDefault()

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
    setFeedback(
      <>
        <hX>Sorry, the passwords need to:</hX>
        <ul>
          {arrPasswordProblems.map(problem => (
            <li>{problem}</li>
          ))}
        </ul>
      </>
    )
    return
  }
  const existingAccount = await axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `query user($email: String!) {
      user(userEmail: $email){
        email
      }
    }
      `,
      variables: {
        email,
      },
    },
  })

  if (existingAccount.data.data.user.email) {
    setFeedback(
      "Looks like you already have an account, click on the button below to go to the login page."
    )
    return
  }
  const result = await axios({
    url: process.env.GATSBY_API,
    method: "post",
    data: {
      query: `mutation createUser($email: String!, $password: String!) {
      createUser(user: {email: $email, password: $password}){
        email
      }
    }
      `,
      variables: {
        email,
        password: password1,
      },
    },
  })
  if (result.status !== 200) {
    setFeedback(result.statusText)
    return
  }
  setFeedback(feedbackSuccess)
  setIsLoggedIn(email)
}
