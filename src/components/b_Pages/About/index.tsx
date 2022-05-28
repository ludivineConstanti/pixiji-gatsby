import React, { useMemo } from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import PageWithText from "src/components/c_Partials/PageWithText"
import KaguyaHime from "src/components/d_Illustrations/_compIllus/KaguyaHime"
import {
  arrIllu,
  colorIllu,
} from "src/components/d_Illustrations/_data/kaguyaHime"
import { useAppSelector } from "src/store"

const About = () => {
  const { allKanjisJson } = useStaticQuery(graphql`
    query {
      allKanjisJson {
        ...kanjisJsonFragment
      }
    }
  `)

  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(allKanjisJson.nodes, getKanjisNum(arrIllu)),
    [arrIllu]
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: (data, kanjis) => (
            <KaguyaHime data={data} kanjis={kanjis} totalKanjis={kanjis} />
          ),
          arrDataIllu: { arrIllu, colorIllu },
        }}
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
