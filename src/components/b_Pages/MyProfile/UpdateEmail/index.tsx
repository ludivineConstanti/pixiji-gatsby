import React from "react"

import Input from "src/components/e_Interactives/Input"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import { uiStateOptions } from "../basics"

interface UpdateEmailProps {
  setUiState: (uiState: uiStateOptions) => void
}

const UpdateEmail = ({ setUiState }: UpdateEmailProps) => {
  return (
    <TemplateUpdateInfos setUiState={setUiState}>
      <form onSubmit={event => {}}>
        <Input
          type="email"
          label="New email"
          placeholder="Your new email address"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Your current password"
        />
        <ButtonInText text="Update my email" onClick={() => {}} />
      </form>
    </TemplateUpdateInfos>
  )
}

export default UpdateEmail
