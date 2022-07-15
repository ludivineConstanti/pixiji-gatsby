import React from "react"

import Input from "src/components/e_Interactives/Input"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import { uiStateOptions } from "../basics"

interface UpdatePasswordProps {
  setUiState: (uiState: uiStateOptions) => void
}

const UpdatePassword = ({ setUiState }: UpdatePasswordProps) => {
  return (
    <TemplateUpdateInfos setUiState={setUiState}>
      <form onSubmit={event => {}}>
        <Input
          type="password"
          label="Current password"
          placeholder="Your current password"
        />
        <Input
          type="password"
          label="New password"
          placeholder="Your new password"
        />
        <Input
          type="password"
          label="Confirm new password"
          placeholder="Confirm your new password"
        />
        <ButtonInText text="Update my password" onClick={() => {}} />
      </form>
    </TemplateUpdateInfos>
  )
}

export default UpdatePassword
