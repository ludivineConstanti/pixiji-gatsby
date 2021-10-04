import React, { useMemo } from "react"

import { useAppSelector } from "src/store"
import {
  kanjisArrFormatter,
  getKanjisNum,
} from "src/helpers/formatters/kanjisArrFormatter"
import KodomoNoHi from "src/components/d_Illustrations/_compIllus/KodomoNoHi"
import {
  arrKodomoNoHi,
  colorKodomoNoHi,
} from "src/components/d_Illustrations/_data/kodomoNoHi"
import PageWithText from "src/components/c_Partials/PageWithText"

const About = () => {
  const quizzesSlug = useAppSelector(state => state.quiz.currentSlug)

  const kanjisArr = useMemo(
    () => kanjisArrFormatter(getKanjisNum(arrKodomoNoHi)),
    [arrKodomoNoHi]
  )

  return (
    <>
      <PageWithText
        illu={{
          kanjisArr,
          renderIllu: (data, kanjis, arrNumKanjis) => (
            <KodomoNoHi data={data} kanjis={kanjis} numKanjis={arrNumKanjis} />
          ),
          arrDataIllu: { arrIllu: arrKodomoNoHi, colorIllu: colorKodomoNoHi },
        }}
        textWithTitle={{
          title: "Read me",
          text: [
            "This website was made as a portfolio project, therefore it has features (like the cheating buttons in the menu) that would usually not make sense, but facilitates its use.",
            {
              text: "You can learn more on",
              link: "the read me page of this project, on GitHub.",
              path: "https://github.com/ludivineConstanti/pixiji-gatsby#readme",
            },
          ],
        }}
        buttonBig={{ text: "next", path: `/quizzes/${quizzesSlug}` }}
      />
    </>
  )
}

export default About
