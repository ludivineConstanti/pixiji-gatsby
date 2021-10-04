import React, { useMemo } from "react"

import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import PageWithText from "src/components/c_Partials/PageWithText"
import KaguyaHime from "src/components/d_Illustrations/_compIllus/KaguyaHime"
import {
  arrKaguyaHime,
  colorKaguyaHime,
} from "src/components/d_Illustrations/_data/kaguyaHime"
import { useAppSelector } from "src/store"

const About = () => {
  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(getKanjisNum(arrKaguyaHime)),
    [arrKaguyaHime]
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: (data, kanjis) => (
            <KaguyaHime data={data} kanjis={kanjis} totalKanjis={kanjis} />
          ),
          arrDataIllu: { arrIllu: arrKaguyaHime, colorIllu: colorKaguyaHime },
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
