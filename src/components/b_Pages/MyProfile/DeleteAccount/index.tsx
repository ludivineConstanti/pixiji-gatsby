import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import Input from "src/components/e_Interactives/Input"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TemplateUpdateInfos from "../TemplateUpdateInfos"
import { uiStateOptions } from "../basics"
import Text from "src/components/f_Statics/Text"
import { SForm } from "./style"
import { useAppDispatch, useAppSelector } from "src/store"
import { deleteUser } from "src/helpers/backEnd/users"
import { updateEmail } from "src/reducer/slices/globalSlice"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import { AllQuizFragmentForQuizLinkProps } from "src/models/models"
import { paths } from "src/models/constants"

interface QueryProps {
  allQuiz: AllQuizFragmentForQuizLinkProps
}

interface DeleteAccountProps {
  setUiState: (uiState: uiStateOptions) => void
}

const DeleteAccount = ({ setUiState }: DeleteAccountProps) => {
  const { allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allQuiz {
        nodes {
          quizId
          slug
        }
      }
    }
  `)

  const dispatch = useAppDispatch()
  const email = useAppSelector(state => state.global.email)
  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesSlug = allQuiz.nodes.filter(
    data => data.quizId === currentQuizId
  )[0].slug

  const [feedback, setFeedback] = useState({ success: false, message: "" })

  return feedback.success === false ? (
    <TemplateUpdateInfos setUiState={setUiState}>
      <Text>Are you sure you want to delete your account, permanently?</Text>
      <SForm
        onSubmit={async event => {
          event.preventDefault()

          // need to do it in various step so that typescripts types it correctly
          const target = event.target as HTMLFormElement

          const passwordElement = target[0] as HTMLInputElement
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
            response = await deleteUser({
              email,
              password,
            })
          } catch (error) {
            // tslint:disable-next-line:no-console
            console.log(error)
          }
          if (
            typeof response === "object" &&
            response.data &&
            response.data.data &&
            response.data.data.deleteUser
          ) {
            const { success, message } = response.data.data.deleteUser
            setFeedback({ success, message })
            if (success) {
              dispatch(updateEmail(""))
            }
          } else {
            setFeedback({
              success: false,
              message: "Sorry, something went wrong.",
            })
          }
        }}
      >
        <Input type="password" label="Password" placeholder="Your password" />
        <ButtonInText text="Delete my account" />
      </SForm>
      {feedback.message && <Text>{feedback.message}</Text>}
    </TemplateUpdateInfos>
  ) : (
    <>
      <TextWrapper>
        <Text>{feedback.message}</Text>
      </TextWrapper>
      <ButtonBig text="Quizzes" path={`${paths.quizzes}/${quizzesSlug}`} />
    </>
  )
}

export default DeleteAccount
