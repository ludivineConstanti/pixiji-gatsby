// == Import npm
import React from "react"
import PropTypes from "prop-types"

// == Import
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"

const CreateMyAccount = ({ kanjisArr }) => (
  <>
    <Illu useCase="about" kanjisArr={kanjisArr} />
    <TextWrapper>
      <form>
        <Input type="email" placeholder="Your email address" label="Email" />
        <Input type="password" placeholder="Your password" label="Password" />
        <Input
          type="password"
          placeholder="Confirm your password"
          label="Password confirmation"
          isLast={true}
        />
        <ButtonInText text="Register" path="" />
      </form>
    </TextWrapper>
    <ButtonBig text="Login" path="/login" />
  </>
)

CreateMyAccount.propTypes = {
  kanjisArr: PropTypes.array.isRequired,
}

// == Export
export default CreateMyAccount
