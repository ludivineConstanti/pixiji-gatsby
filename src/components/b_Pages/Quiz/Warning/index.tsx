import React from "react"

import SWarning, { SButtonWrapper } from "./style"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Text from "src/components/f_Statics/Text"
import { paths } from "src/models/constants"

const Warning = () => {
  return (
    <SWarning>
      <Text>
        &#9888; Your score won't be saved since you're not logged in &#9888;
      </Text>
      <SButtonWrapper>
        <ButtonInText text="Login" path={paths.login} size="small" />
        <ButtonInText text="Register" path={paths.register} size="small" />
      </SButtonWrapper>
    </SWarning>
  )
}

export default Warning
