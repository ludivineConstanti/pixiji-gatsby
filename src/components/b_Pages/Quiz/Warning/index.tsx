import React from "react"

import SWarning, { SButtonWrapper } from "./style"
import ButtonInText from "src/components/e_Interactives/ButtonInText"

const Warning = () => {
  return (
    <SWarning>
      <p>
        &#9888; Your score won't be saved since you're not logged in &#9888;
      </p>
      <SButtonWrapper>
        <ButtonInText text="Login" path="/login" size="small" />
        <ButtonInText text="Register" path="/register" size="small" />
      </SButtonWrapper>
    </SWarning>
  )
}

export default Warning
