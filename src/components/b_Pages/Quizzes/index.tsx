import React, { useEffect, useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import { useAppDispatch, useAppSelector } from "src/store"
import { updateIdQuiz } from "src/reducer/slices/quizSlice"
import ButtonBig from "src/components/e_Interactives/ButtonBig"
import TextWithTitle from "src/components/c_Partials/TextWithTitle"
import IlluQuiz from "src/components/d_Illustrations/IlluQuiz"
import QuizzesNav from "./QuizzesNav"

interface QueryProps {
  allKanjisJson: {
    nodes: {
      quizId: number
    }[]
  }
  allQuiz: {
    nodes: {
      quizId: number
      slug: string
    }[]
  }
}

interface QuizzesProps {
  currentQuiz: {
    id: number
    title: string
    slug: string
  }
}

const Quizzes = ({ currentQuiz }: QuizzesProps) => {
  const { allKanjisJson, allQuiz } = useStaticQuery<QueryProps>(graphql`
    query {
      allKanjisJson {
        nodes {
          quizId
        }
      }
      allQuiz {
        nodes {
          quizId
          slug
        }
      }
    }
  `)

  const totalOptions = useMemo(
    () => allKanjisJson.nodes.filter(e => e.quizId === currentQuiz.id).length,
    [allKanjisJson]
  )

  const dispatch = useAppDispatch()

  const dataQuizzes = useAppSelector(state => state.quiz.data)
  const currentQuizData = dataQuizzes.filter(
    data => data.quizId === currentQuiz.id
  )

  const kanjisArr = currentQuizData.length
    ? currentQuizData[0].wrongAnswers.slice(
        0,
        currentQuizData[0].rightAnswers.length
      )
    : []

  const previousQuiz = allQuiz.nodes.filter(
    data => data.quizId === currentQuiz.id - 1
  )

  const nextQuiz = allQuiz.nodes.filter(
    data => data.quizId === currentQuiz.id + 1
  )

  const text = useMemo(() => {
    const numFirstTry = kanjisArr.filter(
      answer => answer.infosAnswer.answeredWrong.length === 0
    )

    let textAnsweredCorrectly = ""
    if (currentQuizData.length > 0) {
      if (numFirstTry.length === currentQuizData[0].totalQuestions) {
        textAnsweredCorrectly =
          "Amazing! You answered all the questions correctly on your first try!"
      } else if (numFirstTry.length === 0) {
        textAnsweredCorrectly = `You answered ${numFirstTry.length} question${
          numFirstTry.length > 1 ? "s" : ""
        } correctly on your first try!`
      }
    }

    const textWrongAnswers =
      kanjisArr.filter(e => e.answer !== 0).length > 0
        ? `Hover the squares on the right to look at the answer${
            kanjisArr.length > 1 ? "s" : ""
          } you got wrong.`
        : ""
    const textIntro =
      numFirstTry.length > 0 || kanjisArr.length > 0
        ? ""
        : `This quiz contains the ${totalOptions} kanjis that are taught in the ${currentQuiz.title}, in Japan.`

    return {
      firstTry: textAnsweredCorrectly,
      wrongAnswers: textWrongAnswers,
      intro: textIntro,
    }
  }, [kanjisArr])

  useEffect(() => {
    dispatch(updateIdQuiz({ quizId: currentQuiz.id }))
  }, [currentQuiz.id, currentQuiz.slug])

  return (
    <>
      <IlluQuiz
        currentQuizId={currentQuiz.id}
        kanjisArr={kanjisArr.map(e => {
          if (e.answer) {
            return e.answer
          }
        })}
      />
      <div>
        <TextWithTitle
          title={`Quiz ${currentQuiz.id}`}
          text={[text.intro, text.firstTry, text.wrongAnswers]}
          button={{
            text: kanjisArr.length > 0 ? "Continue" : "Start",
            path: `/quiz/${currentQuiz.slug}`,
          }}
        />
        <QuizzesNav
          currentQuizId={currentQuiz.id}
          prevQuiz={previousQuiz.length}
          nextQuiz={nextQuiz.length}
        />
        {previousQuiz.length ? (
          <ButtonBig
            text={`Quiz ${previousQuiz[0].quizId}`}
            arrowDirection="left"
            path={`/quizzes/${previousQuiz[0].slug}`}
          />
        ) : (
          ""
        )}
        {nextQuiz.length ? (
          <ButtonBig
            text={`Quiz ${nextQuiz[0].quizId}`}
            side="right"
            path={`/quizzes/${nextQuiz[0].slug}`}
          />
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default Quizzes
