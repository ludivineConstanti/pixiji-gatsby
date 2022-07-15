import React from "react"

import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import { uiStateOptions } from "../basics"
import Text from "src/components/f_Statics/Text"

interface DeleteAccountProps {
  setUiState: (uiState: uiStateOptions) => void
}

const DeleteAccount = ({ setUiState }: DeleteAccountProps) => {
  return (
    <TemplateUpdateInfos setUiState={setUiState}>
      <Text>Are you sure you want to delete your account, permanently?</Text>
      <form onSubmit={event => {}}>
        <ButtonInText text="Confirm" onClick={() => {}} />
      </form>
    </TemplateUpdateInfos>
  )
}

export default DeleteAccount
