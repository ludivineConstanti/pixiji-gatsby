import React, { useState, useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"
import { onSubmit } from "./utils"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"
import SakuraBirds from "src/components/d_Illustrations/_compIllus/SakuraBirds"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/sakuraBirds"
import Text from "src/components/f_Statics/Text"

const Register = () => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragment
      }
    }
  `)

  const dispatch = useAppDispatch()

  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(allKanjisJson.nodes, getKanjisNum(arrIllu)),
    []
  )

  const [feedback, setFeedback] = useState({ success: false, message: "" })
  return (
    <>
      <Illu
        useCase="register"
        kanjisArr={kanjisArr}
        renderIllu={data => <SakuraBirds data={data} />}
        arrDataIllu={{ arrIllu, colorIllu }}
      />

      {feedback.success ? (
        <TextWrapper>
          <>
            <Text>{feedback.message}</Text>
            <ButtonInText text="Quizzes" path={`/quizzes/${quizzesSlug}`} />
          </>
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
              <ButtonInText text="Register" buttonType="submit" />
            </form>
            {feedback.message && <FeedbackMessage content={feedback.message} />}
          </TextWrapper>
          <ButtonBig text="Login" path="/login" />
        </>
      )}
    </>
  )
}

export default Register
