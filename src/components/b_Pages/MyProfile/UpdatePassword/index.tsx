import React, { useState } from "react"

import Input from "src/components/e_Interactives/Input"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"
import { uiStateOptions } from "../basics"
import { setUserPassword } from "src/helpers/backEnd/users"
import { useAppSelector } from "src/store"

interface UpdatePasswordProps {
  setUiState: (uiState: uiStateOptions) => void
}

const UpdatePassword = ({ setUiState }: UpdatePasswordProps) => {
  const [feedback, setFeedback] = useState({ success: false, message: "" })
  const email = useAppSelector(state => state.global.email)

  return (
    <TemplateUpdateInfos setUiState={setUiState}>
      <form
        onSubmit={async event => {
          event.preventDefault()

          const password = event.target[0].value
          const newPassword = event.target[1].value
          const newPasswordConfirmation = event.target[2].value

          if (!password) {
            setFeedback({
              success: false,
              message: "Please your current password.",
            })
            return
          }
          if (!newPassword) {
            setFeedback({
              success: false,
              message: "Please enter the new password.",
            })
            return
          }
          if (newPassword !== newPasswordConfirmation) {
            setFeedback({
              success: false,
              message: "The new passwords should be identical.",
            })
            return
          }
          const response = await setUserPassword({
            email,
            password,
            newPassword,
          })
          console.log(response)
        }}
      >
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
        <ButtonInText text="Update my password" />
      </form>
      {feedback.message && <FeedbackMessage content={feedback.message} />}
    </TemplateUpdateInfos>
  )
}

export default UpdatePassword
