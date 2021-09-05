import React from "react"
import PropTypes from "prop-types"

import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"

const onSubmit = e => {
  e.preventDefault()
  console.log("submitted")
}

const Login = ({ kanjisArr, quizzesSlug }) => (
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

Login.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
  quizzesSlug: PropTypes.string.isRequired,
}

// == Export
export default Login
