import React from "react"

import PageWithText from "src/components/c_Partials/PageWithText"
import { useAppSelector } from "src/store"

const About = () => {
  const kanjisArr = useAppSelector(state => state.kanjisArr.about)
  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  return (
    <>
      <PageWithText
        illu={{ useCase: "about", kanjisArr }}
        textWithTitle={{
          title: "About",
          text: [
            "The informations for the quizzes and their answers was taken from wikipedia and jisho.org.",
            "The illustrations are self-made.",
          ],
        }}
        buttonBig={{ text: "Quizzes", path: `/quizzes/${quizzesSlug}` }}
      />
    </>
  )
}

export default About
