import React from "react"

import ButtonInText from "src/components/e_Interactives/ButtonInText"
import { useAppSelector } from "src/store"
import Text from "src/components/f_Statics/Text"
import { uiStateOptions } from "../basics"
import TextWrapper from "src/components/f_Statics/TextWrapper"

interface DefaultStateProps {
  setUiState: (uiState: uiStateOptions) => void
}

const DefaultState = ({ setUiState }: DefaultStateProps) => {
  const email = useAppSelector(state => state.global.email)

  return (
    <TextWrapper>
      <Text>{`Current email: ${email}`}</Text>
      <ButtonInText
        text="Update my email"
        onClick={() => setUiState(uiStateOptions.updateEmail)}
      />
      <ButtonInText
        text="Update my password"
        onClick={() => setUiState(uiStateOptions.updatePassword)}
      />
      <ButtonInText
        text="Delete my account"
        onClick={() => setUiState(uiStateOptions.deleteAccount)}
      />
    </TextWrapper>
  )
}

export default DefaultState
