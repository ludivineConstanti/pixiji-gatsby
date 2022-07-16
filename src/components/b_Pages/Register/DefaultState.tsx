import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"
import { onSubmit } from "./utils"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"
import Text from "src/components/f_Statics/Text"
import { AllQuizFragmentForQuizLinkProps } from "src/models/models"
import { paths } from "src/models/constants"

interface QueryProps {
  allQuiz: AllQuizFragmentForQuizLinkProps
}

const DefaultState = () => {
  const { allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allQuiz {
        ...quizFragmentForQuizLink
      }
    }
  `)

  const dispatch = useAppDispatch()

  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesSlug = allQuiz.nodes.filter(
    data => data.quizId === currentQuizId
  )[0].slug

  const [feedback, setFeedback] = useState({ success: false, message: "" })

  return (
    <>
      {feedback.success ? (
        <TextWrapper>
          <Text>{feedback.message}</Text>
          <ButtonInText text="Quizzes" path={`/quizzes/${quizzesSlug}`} />
        </TextWrapper>
      ) : (
        <>
          <TextWrapper>
            <form
              onSubmit={e => {
                onSubmit(e, feedback, setFeedback, dispatch)
              }}
            >
              <Input
                type="email"
                placeholder="Your email address"
                label="Email"
              />
              <Input
                type="password"
                placeholder="Your password"
                label="Password"
              />
              <Input
                type="password"
                placeholder="Confirm your password"
                label="Password confirmation"
                isLast={true}
              />
              <ButtonInText text="Register" />
            </form>
            {feedback.message && <FeedbackMessage content={feedback.message} />}
          </TextWrapper>
          <ButtonBig text="Login" path={paths.login} />
        </>
      )}
    </>
  )
}

export default DefaultState
