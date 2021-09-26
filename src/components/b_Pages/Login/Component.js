import React, { useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"

const onSubmit = async (
  e,
  feedback,
  setFeedback,
  setIsLoggedIn,
  updateQuizzes
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
    setFeedback({ success: false, result: responseLogIn.statusText })
    return
  }
  const result = responseLogIn.data.data.getUser
  if (result.success) {
    setIsLoggedIn(email)
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
  updateQuizzes(responseWorstScores.data.data.getWorstScores)
}

const Login = ({ kanjisArr, quizzesSlug, setIsLoggedIn, updateQuizzes }) => {
  const [feedback, setFeedback] = useState({ success: false, message: "" })
  return (
    <>
      <Illu useCase="login" kanjisArr={kanjisArr} />
      <TextWrapper>
        <form
          onSubmit={e =>
            onSubmit(e, feedback, setFeedback, setIsLoggedIn, updateQuizzes)
          }
        >
          <Input type="email" placeholder="Your email address" label="Email" />
          <Input
            type="password"
            placeholder="Your password"
            label="Password"
            isLast={true}
          />
          <ButtonInText text="Login" buttonType="submit" />
        </form>
        {feedback.message && <FeedbackMessage content={feedback.message} />}
      </TextWrapper>
      <ButtonBig
        text={feedback.success ? "Quizzes" : "Register"}
        path={feedback.success ? `/quizzes/${quizzesSlug}` : "/register"}
      />
    </>
  )
}

Login.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
  updateQuizzes: PropTypes.func.isRequired,
}

// == Export
export default Login
