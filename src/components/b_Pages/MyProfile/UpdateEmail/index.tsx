import React, { useState } from "react"

import Input from "src/components/e_Interactives/Input"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"
import { uiStateOptions } from "../basics"
import { setUserEmail } from "src/helpers/backEnd/users"
import { updateEmail } from "src/reducer/slices/globalSlice"
import { useAppDispatch, useAppSelector } from "src/store"

interface UpdateEmailProps {
  setUiState: (uiState: uiStateOptions) => void
}

const UpdateEmail = ({ setUiState }: UpdateEmailProps) => {
  const [feedback, setFeedback] = useState({ success: false, message: "" })
  const email = useAppSelector(state => state.global.email)

  const dispatch = useAppDispatch()

  return (
    <TemplateUpdateInfos setUiState={setUiState}>
      <form
        onSubmit={async event => {
          event.preventDefault()

          const newEmail = event.target[0].value

          if (!newEmail) {
            setFeedback({
              success: false,
              message: "Please fill both email fields.",
            })
            return
          }

          const newEmailConfirmation = event.target[1].value

          if (newEmail !== newEmailConfirmation) {
            setFeedback({ success: false, message: "The emails do not match." })
            return
          }

          if (newEmail === newEmailConfirmation) {
            setFeedback({
              success: false,
              message:
                "Please enter an email that is different from your current one.",
            })
            return
          }

          const password = event.target[2].value

          if (!password) {
            setFeedback({
              success: false,
              message: "Please enter your password.",
            })
            return
          }

          const response = await setUserEmail({ email, newEmail, password })

          if (
            typeof response === "object" &&
            response.data &&
            response.data.data &&
            response.data.data.setUserEmail
          ) {
            const newFeedback = response.data.data.setUserEmail
            if (newFeedback.success) {
              dispatch(updateEmail(newEmail))
            }
            setFeedback(newFeedback)
          } else {
            setFeedback({
              success: false,
              message: "Sorry, something went wrong.",
            })
          }
        }}
      >
        <Input type="email" label="New email" placeholder="Your new email" />
        <Input
          type="email"
          label="Confirm new email"
          placeholder="Confirm your new email"
        />
        <Input
          type="password"
          label="Password"
          placeholder="Your current password"
        />
        <ButtonInText text="Update my email" />
      </form>
      {feedback.message && <FeedbackMessage content={feedback.message} />}
    </TemplateUpdateInfos>
  )
}

export default UpdateEmail
