import React from "react"
import PropTypes from "prop-types"
import axios from "axios"

import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"

const email = "I am a dynamic email"
const password = "I am a dynamic password"

const onSubmit = async e => {
  e.preventDefault()
  console.log("e", e)
  console.log(e.target[0].value)
  console.log(e.target[1].value)
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
        password,
      },
    },
  })
}

const Login = ({ kanjisArr, quizzesSlug }) => {
  return (
    <>
      <Illu useCase="about" kanjisArr={kanjisArr} />
      <TextWrapper>
        <form onSubmit={onSubmit}>
          <Input type="email" placeholder="Your email address" label="Email" />
          <Input
            type="password"
            placeholder="Your password"
            label="Password"
            isLast={true}
          />
          <ButtonInText
            text="Login"
            path={`/quizzes/${quizzesSlug}`}
            buttonType="submit"
          />
        </form>
      </TextWrapper>
      <ButtonBig text="Register" path="/register" />
    </>
  )
}

Login.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
}

// == Export
export default Login
