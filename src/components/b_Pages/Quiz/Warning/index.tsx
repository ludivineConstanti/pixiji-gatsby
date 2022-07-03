import React from "react"

import SWarning, { SButtonWrapper } from "./style"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Text from "src/components/f_Statics/Text"

const Warning = () => {
  return (
    <SWarning>
      <Text>
        &#9888; Your score won't be saved since you're not logged in &#9888;
      </Text>
      <SButtonWrapper>
        <ButtonInText text="Login" path="/login" size="small" />
        <ButtonInText text="Register" path="/register" size="small" />
      </SButtonWrapper>
    </SWarning>
  )
}

export default Warning
