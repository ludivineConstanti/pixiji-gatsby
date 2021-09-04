import React from "react"
import PropTypes from "prop-types"

import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"

const Login = ({ kanjisArr }) => (
  <>
    <Illu useCase="about" kanjisArr={kanjisArr} />
    <TextWrapper>
      <form>
        <Input type="email" placeholder="Your email address" label="Email" />
        <Input
          type="password"
          placeholder="Your password"
          label="Password"
          isLast={true}
        />
        <ButtonInText text="Register" path="/create-my-account" />
      </form>
    </TextWrapper>
    <ButtonBig text="Register" path="" />
  </>
)

Login.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
}

// == Export
export default Login
