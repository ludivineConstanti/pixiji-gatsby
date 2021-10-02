import React from "react"

import { useAppSelector } from "src/store"
import PageWithText from "src/components/c_Partials/PageWithText"

const About = () => {
  const kanjisArr = useAppSelector(state => state.kanjisArr.readMe)
  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  return (
    <>
      <PageWithText
        illu={{ useCase: "readMe", kanjisArr }}
        textWithTitle={{
          title: "Read me",
          text: [
            "This website was made as a portfolio project, therefore it has features (like the cheating buttons in the menu) that would usually not make sense, but facilitates its use.",
            {
              text: "You can learn more on",
              link: "the read me page of this project, on GitHub.",
              path: "https://github.com/ludivineConstanti/Pixiji/blob/main/README.md",
            },
          ],
        }}
        buttonBig={{ text: "next", path: `/quizzes/${quizzesSlug}` }}
      />
    </>
  )
}

export default About
