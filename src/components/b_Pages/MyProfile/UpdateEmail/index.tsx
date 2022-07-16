import React, { useState } from "react"

import Input from "src/components/e_Interactives/Input"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"
import Text from "src/components/f_Statics/Text"
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
      {feedback.success === false ? (
        <>
          <form
            onSubmit={async event => {
              event.preventDefault()

              // need to do it in various step so that typescripts types it correctly
              const target = event.target as HTMLFormElement

              const newEmailElement = target[0] as HTMLInputElement
              const newEmail = newEmailElement.value

              if (!newEmail) {
                setFeedback({
                  success: false,
                  message: "Please fill both email fields.",
                })
                return
              }

              if (email === newEmail) {
                setFeedback({
                  success: false,
                  message:
                    "Please enter an email that is different from your current one.",
                })
                return
              }

              const newEmailConfirmationElement = target[1] as HTMLInputElement
              const newEmailConfirmation = newEmailConfirmationElement.value

              if (newEmail !== newEmailConfirmation) {
                setFeedback({
                  success: false,
                  message: "The emails do not match.",
                })
                return
              }

              const passwordElement = target[2] as HTMLInputElement
              const password = passwordElement.value

              if (!password) {
                setFeedback({
                  success: false,
                  message: "Please enter your password.",
                })
                return
              }

              let response
              try {
                response = await setUserEmail({ email, newEmail, password })
              } catch (error) {
                // tslint:disable-next-line:no-console
                console.log(error)
              }

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
            <Input
              type="email"
              label="New email"
              placeholder="Your new email"
            />
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
        </>
      ) : (
        <Text>{feedback.message}</Text>
      )}
    </TemplateUpdateInfos>
  )
}

export default UpdateEmail
