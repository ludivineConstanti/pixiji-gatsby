// == Import npm
import React, { useState } from "react"
import PropTypes from "prop-types"

// == Import
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"
import { feedbackSuccess, onSubmit } from "./utils"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"

const Register = ({ kanjisArr, quizzesSlug, setIsLoggedIn }) => {
  const [feedback, setFeedback] = useState("")
  return (
    <>
      <Illu useCase="register" kanjisArr={kanjisArr} />
      <TextWrapper>
        <form
          onSubmit={e => {
            onSubmit(e, setFeedback, setIsLoggedIn)
          }}
        >
          <Input type="email" placeholder="Your email address" label="Email" />
          <Input type="password" placeholder="Your password" label="Password" />
          <Input
            type="password"
            placeholder="Confirm your password"
            label="Password confirmation"
            isLast={true}
          />
          <ButtonInText text="Register" buttonType="submit" />
        </form>
        {feedback && <FeedbackMessage content={feedback} />}
      </TextWrapper>
      <ButtonBig
        text={feedback === feedbackSuccess ? "Quizzes" : "Login"}
        path={
          feedback === feedbackSuccess ? `/quizzes/${quizzesSlug}` : "/login"
        }
      />
    </>
  )
}

Register.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
  setIsLoggedIn: PropTypes.func.isRequired,
}

// == Export
export default Register
