import React, { useState } from "react"

import Input from "src/components/e_Interactives/Input"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import { uiStateOptions } from "../basics"
import Text from "src/components/f_Statics/Text"
import { SForm } from "./style"
import { useAppSelector } from "src/store"
import { deleteUser } from "src/helpers/backEnd/users"

interface DeleteAccountProps {
  setUiState: (uiState: uiStateOptions) => void
}

const DeleteAccount = ({ setUiState }: DeleteAccountProps) => {
  const [feedback, setFeedback] = useState({ success: false, message: "" })
  const email = useAppSelector(state => state.global.email)
  return (
    <TemplateUpdateInfos setUiState={setUiState}>
      <Text>Are you sure you want to delete your account, permanently?</Text>
      <SForm
        onSubmit={async event => {
          event.preventDefault()
          const password = event.target[0].value
          if (!password) {
            setFeedback({
              success: false,
              message: "Please enter your password.",
            })
            return
          }
          const response = await deleteUser({
            email,
            password,
          })
          console.log(response)
        }}
      >
        <Input type="password" label="Password" placeholder="Your password" />
        <ButtonInText text="Delete my account" />
      </SForm>
      {feedback.message && <Text>{feedback.message}</Text>}
    </TemplateUpdateInfos>
  )
}

export default DeleteAccount
