import React, { useState, useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import { useAppDispatch, useAppSelector } from "src/store"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import ButtonInText from "src/components/e_Interactives/ButtonInText"
import Illu from "src/components/d_Illustrations/Illu"
import TextWrapper from "src/components/f_Statics/TextWrapper"
import Input from "src/components/e_Interactives/Input"
import FeedbackMessage from "src/components/f_Statics/FeedbackMessage"
import RedPanda from "src/components/d_Illustrations/_compIllus/RedPanda"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/redPanda"
import { onSubmit } from "./utils"
import {
  KanjisJsonFragmentProps,
  AllQuizFragmentProps,
} from "src/models/models"

interface QueryProps {
  allKanjisJson: KanjisJsonFragmentProps
  allQuiz: AllQuizFragmentProps
}

const Login = () => {
  const { allKanjisJson, allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragment
      }
      allQuiz {
        ...quizFragment
      }
    }
  `)

  const dispatch = useAppDispatch()

  const currentQuizId = useAppSelector(state => state.quiz.currentQuizId)
  const quizzesSlug = allQuiz.nodes.filter(
    data => data.quizId === currentQuizId
  )[0].slug

  const kanjisArr = useMemo(() => {
    const kanjisNum = getKanjisNum(arrIllu)
    return kanjisArrFormatter(allKanjisJson.nodes, kanjisNum)
  }, [])

  const [feedback, setFeedback] = useState({ success: false, message: "" })
  return (
    <>
      <Illu
        kanjisArr={kanjisArr}
        renderIllu={data => <RedPanda data={data} />}
        arrDataIllu={{ arrIllu, colorIllu }}
      />

      <TextWrapper>
        <form onSubmit={e => onSubmit(e, feedback, setFeedback, dispatch)}>
          <Input type="email" placeholder="Your email address" label="Email" />
          <Input
            type="password"
            placeholder="Your password"
            label="Password"
            isLast={true}
          />
          <ButtonInText text="Login" buttonType="submit" />
        </form>
        {feedback.message && <FeedbackMessage content={feedback.message} />}
      </TextWrapper>
      <ButtonBig
        text={feedback.success ? "Quizzes" : "Register"}
        path={feedback.success ? `/quizzes/${quizzesSlug}` : "/register"}
      />
    </>
  )
}

export default Login
